import { Component, OnInit } from '@angular/core';
import { ControlObjectField } from '../../API.service';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';

type UIField = {
  isNew: Boolean,
  id: String,
  code: String,
  description: String,
  type: String,
  key: Boolean
}

@Component({
  selector: 'app-control-object-fields',
  templateUrl: './control-object-fields.component.html',
  styleUrls: ['./control-object-fields.component.scss'],
  providers: [DialogService, ConfirmationService]
})
export class ControlObjectFieldsComponent implements OnInit {

  fields: UIField[] = [];
  selectedFields!: UIField[] | null;
  types: String[] = ["STRING", "NUMERIC", "TIMESTAMP", "BOOLEAN"];

  constructor(public fieldsRef: DynamicDialogRef, public config: DynamicDialogConfig, private confirmationService: ConfirmationService) {

  }

  ngOnInit() {
    if (this.config.data.fields) {
      this.loadData();
    }
  }

  createNewField() {
    this.fields.push({
      isNew: true,
      id: this.createId(),
      code: "",
      description: "",
      type: "",
      key: false
    } as UIField);
    this.fields = [...this.fields];
  }

  deleteSelectedFields() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected fields?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.fields = this.fields.filter((val) => !this.selectedFields?.includes(val));
        this.selectedFields = null;
      }
    });
  }

  deleteField(field: UIField) {
    console.log(field);
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + field.code + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.fields = this.fields.filter((val) => val.id !== field.id);
      }
    });
  }

  refresh() {
    this.fields = [];
    this.selectedFields = null;
    this.loadData();
  }

  cancel() {
    this.fields = [];
    this.selectedFields = null;
    this.fieldsRef.close();
  }

  save() {
    this.fieldsRef.close(
      this.fields.map(f => {
        return {
          code: f.code, description: f.description, type: f.type, key: f.key
        } as ControlObjectField
      }
      )
    );
  }

  loadData(): void {
    (this.config.data.fields as ControlObjectField[])
      .map(f => { return { isNew: false, id: this.createId(), code: f.code, description: f.description, type: f.type, key: f.key } as UIField })
      .forEach(f => {
        this.fields.push(f);
      });
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

}
