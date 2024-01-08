import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Auth, Storage } from 'aws-amplify';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-control-object-data',
  templateUrl: './control-object-data.component.html',
  styleUrls: ['./control-object-data.component.scss'],
  providers: [DialogService]
})
export class ControlObjectDataComponent implements OnInit {

  controlObjectColumns: any[] = [{ code: 'ID', description: 'Id' }];
  controlObjectFilterColumns: String[] = ['ID'];
  controlObjectData: any[] = [];
  controlObjectFilterSortData: any[] = [];
  virtualControlObjectData: any[] = [];
  totalRecords: number;
  loading: boolean;

  constructor(public dataRef: DynamicDialogRef, public config: DynamicDialogConfig, private papa: Papa) {

  }

  ngOnInit(): void {
    if (this.config.data.controlObject) {
      this.config.data.controlObject.fields
        .map(f => { return { code: f.code, description: f.description }; })
        .forEach(f => { this.controlObjectColumns.push(f); });
      this.controlObjectColumns
        .map(f => { return f.code; })
        .forEach(f => { this.controlObjectFilterColumns.push(f); });
      this.loadAllData(this.config.data.controlObject.code);
    }
  }

  loadAllData(fileName: string): void {
    Storage.get(fileName + '.csv', {
      level: "public",
      download: true
    })
      .then(result => {
        result.Body.text().then(string => {
          this.papa.parse(string, {
            header: true,
            fastMode: true,
            quoteChar: '"',
            newline: '\n',
            delimiter: ',',
            skipEmptyLines: true,
            complete: (result) => {
              this.controlObjectData = result.data;
              this.totalRecords = result.data.length
              this.virtualControlObjectData = Array.from({ length: this.totalRecords });
              this.loadData();
            }
          });
        });
      })
      .catch(err => {
        console.log(err)
      });
  }

  loadDataLazy(event: LazyLoadEvent) {
    if (this.controlObjectData) {
      this.loadData(event.first, event.rows, event.filters, event.sortField, event.sortOrder);
      event.forceUpdate();
    }
  }

  loadData(first: number = 0, rows: number = 100, filters: any = undefined, sortField: string = undefined, sortOrder: number = 1) {
    this.loading = true;
    //if (filters) {
      //this.controlObjectFilterSortData = this.controlObjectData.filter(row => this.filterField(row, filters))
    //} else {
      this.controlObjectFilterSortData = this.controlObjectData;
    //}
    if (sortField) {
      this.controlObjectFilterSortData.sort((a, b) => this.compareField(a, b, sortField) * sortOrder);
    }
    let loadedControlObjectData = this.controlObjectFilterSortData.slice(first, first + rows);
    Array.prototype.splice.apply(this.virtualControlObjectData, [...[first, rows], ...loadedControlObjectData]);
    this.loading = false;
  }

  filterField(row: any, filter): boolean {
    console.log(filter);
    let isInFilter = false;
    let noFilter = true;
    for (var columnName in filter) {
      console.log(columnName);
      if (row[columnName] == null) {
        return false;
      }
      noFilter = false;
      let rowValue: String = row[columnName].toString().toLowerCase();
      let filterMatchMode: String = filter[columnName].matchMode;
      if (filterMatchMode.includes("contains") && rowValue.includes(filter[columnName].value.toLowerCase())) {
        isInFilter = true;
      } else if (filterMatchMode.includes("startsWith") && rowValue.startsWith(filter[columnName].value.toLowerCase())) {
        isInFilter = true;
      } else if (filterMatchMode.includes("in") && filter[columnName].value.includes(rowValue)) {
        isInFilter = true;
      }
    }
    if (noFilter) { isInFilter = true; }
    return isInFilter;
  }

  compareField(rowA: any, rowB: any, field: string): number {
    if (rowA[field] == null) {
      return 1;
    }
    if (typeof rowA[field] === 'string') {
      return rowA[field].localeCompare(rowB[field]);
    }
    if (typeof rowA[field] === 'number') {
      return (rowA[field] > rowB[field]) ? 1 : -1;
    }
    return 1;
  }

}
