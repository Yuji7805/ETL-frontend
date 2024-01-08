import { Component, ViewEncapsulation, Inject, ViewChild } from "@angular/core";
import { select } from "@syncfusion/ej2-base";
import {
  SpreadsheetComponent,
  getFormatFromType,
  MenuSelectEventArgs,
  SpreadsheetAllModule,
  CellSaveEventArgs,
} from "@syncfusion/ej2-angular-spreadsheet";
import { Router } from "@angular/router";
import { ClickEventArgs } from "@syncfusion/ej2-navigations";
import { MatDialogModule, MatDialog } from "@angular/material/dialog";
import { NewFormDialogComponent } from "./dialogs/new-form-dialog/new-form-dialog.component";
import { OpenFormDialogComponent } from "./dialogs/open-form-dialog/open-form-dialog.component";
import { CloseFormDialogComponent } from "./dialogs/close-form-dialog/close-form-dialog.component";
import { NewInputModuleDialogComponent } from "./dialogs/new-input-module-dialog/new-input-module-dialog.component";
interface CellModel {
  value: string | null;
}

interface RowModel {
  index?: number;
  cells: CellModel[];
}

@Component({
  selector: "control-content",
  templateUrl: "data-entry.html",
  styleUrls: ["data-entry.css"],
  imports: [SpreadsheetAllModule, MatDialogModule],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class DataEntry {
  public openUrl: string =
    "https://services.syncfusion.com/angular/production/api/spreadsheet/open";
  public saveUrl: string =
    "https://services.syncfusion.com/angular/production/api/spreadsheet/save";

  @ViewChild("spreadsheet")
  public spreadsheetObj: SpreadsheetComponent;
  public styles = { fontWeight: "bold", textAlign: "center" };
  public styles2 = { fontWeight: "bold", textAlign: "right" };
  public styles3 = { fontWeight: "bold" };
  currencyFormat: string = getFormatFromType("Currency");
  constructor(private router: Router, public dialog: MatDialog) {}

  isToggleButtonActive: boolean = false;
  public rawData: string[][];
  public headers: string[];

  private sheetCode: string;
  private sheetDescription: string;
  sheetName: string = "New Form";

  sheetRows: Object[];

  salary_template: Object[] = [
    {
      cells: [
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            fontWeight: "bold",
            textAlign: "center",
          },
          value: "TIME VERSION",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            fontWeight: "bold",
            textAlign: "center",
          },
          value: "MONTH",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            fontWeight: "bold",
            textAlign: "center",
          },
          value: "COST CENTER",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            fontWeight: "bold",
            textAlign: "center",
          },
          value: "EMPLOYEE",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            fontWeight: "bold",
            textAlign: "center",
          },
          value: "SALARY",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            fontWeight: "bold",
            textAlign: "center",
          },
          value: "MERIT INCREASE",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            fontWeight: "bold",
            textAlign: "center",
          },
          value: "ACCOUNT",
        },
      ],
    },
    {
      cells: [
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "2024 BDG",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "Jan",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "Admin",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "XY1",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 200,
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 0.005,
          format: "0.00%",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "A00294",
        },
      ],
    },
    {
      cells: [
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "2025 BDG",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "Feb",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "Admin",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "XY2",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 450,
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 0.01,
          format: "0%",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "A00543",
        },
      ],
    },
    {
      cells: [
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "2026 BDG",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "Mar",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "Admin",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "XY3",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 160,
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 0.02,
          format: "0%",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "A00687",
        },
      ],
    },
    {
      cells: [
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "2027 BDG",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "Apr",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "Admin",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "XY4",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 280,
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 0.01,
          format: "0%",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "A00149",
        },
      ],
    },
    {
      cells: [
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "2028 BDG",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "May",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "Admin",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "XY5",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 300,
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 0.005,
          format: "0.00%",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "A00089",
        },
      ],
    },
    {
      cells: [
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "2029 BDG",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "Jun",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "IT",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "XY6",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 90,
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 0.03,
          format: "0%",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "A00123",
        },
      ],
    },
    {
      cells: [
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "2030 BDG",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "Jul",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "IT",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "XY7",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 620,
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
            backgroundColor: "#ffff00",
          },
          value: 0.01,
          format: "0%",
        },
        {
          style: {
            whiteSpace: "nowrap",
            verticalAlign: "bottom",
          },
          value: "A00111",
        },
      ],
    },
    {
      cells: [
        null,
        null,
        null,
        null,
        {
          value: "",
        },
      ],
    },
  ];

  // update data when spreadsheet edited
  onContentChange(args: CellSaveEventArgs): void {
    this.getData();
  }

  ngAfterViewInit(): void {
    // Assuming 'Print' is the last item in the File Menu,
    // this will disable it by passing 'false' as the second argument.
    this.spreadsheetObj.enableFileMenuItems(["CLOSE FORM"], false);
  }

  // update ribbon when it iniitialized
  created() {
    this.spreadsheetObj!.cellFormat(
      { fontWeight: "bold", textAlign: "center" },
      "A1:F1"
    );

    this.spreadsheetObj.addToolbarItems("Home", [
      { type: "Separator" },
      {
        type: "Input",
        template: `
                  <style>
                    .switch {
                      position: relative;                      
                      width: 46px;
                      height: 20px;
                      padding-left: 10px;             
                    }

                    .switch input { 
                      opacity: 0;
                      width: 0;
                      height: 0;
                    }

                    .slider {
                      position: absolute;
                      cursor: pointer;
                      top: 0;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      background-color: #ccc;
                      -webkit-transition: .4s;
                      transition: .4s;
                    }

                    .slider:before {
                      position: absolute;
                      content: "";
                      height: 16px;
                      width: 16px;
                      left: 2px;
                      bottom: 2px;
                      background-color: white;
                      -webkit-transition: .4s;
                      transition: .4s;
                    }

                    input:checked + .slider {
                      background-color: #51F351;
                    }

                    input:focus + .slider {
                      box-shadow: 0 0 1px #2196F3;
                    }

                    input:checked + .slider:before {
                      -webkit-transform: translateX(26px);
                      -ms-transform: translateX(26px);
                      transform: translateX(26px);
                    }

                    /* Rounded sliders */
                    .slider.round {
                      border-radius: 20px;
                    }

                    .slider.round:before {
                      border-radius: 50%;
                    }
                  </style>
                  <label class="switch" id="switch">
                    <input type="checkbox" ${this.getToogleButtonStatus()}>
                    <span class="slider round"></span>                          
                  </label>
                  <div id="toggleTxt" style="padding-left: 10px; padding-bottom: 3px; font-size: larger;">${
                    this.isToggleButtonActive
                      ? " Design Mode"
                      : " Execution Mode"
                  }</div>
                  `,
        click: (args: ClickEventArgs): void => {
          if ((args.originalEvent.target as HTMLElement).tagName === "INPUT") {
            this.toggleButtonClick();
          } else if (
            (args.originalEvent.target as HTMLElement).id === "toggleTxt"
          ) {
            var elem = document.getElementById("switch");
            elem.click();
          }
        },
      },
    ]);

    this.spreadsheetObj!.addRibbonTabs([
      {
        header: { text: "FORM BUILDER" },
        content: [
          {
            text: "NEW INPUT MODULE",
            prefixIcon: "e-file-new e-icons",
            tooltipText: "New input module",
            click: (args: ClickEventArgs): void => {
              this.openNewInputModuleDialog();
            },
          },
          { type: "Separator" },
          {
            text: "EDIT INPUT MODULE",
            prefixIcon: "e-edit e-icons",
            tooltipText: "Edit input module",
            click: (args: ClickEventArgs): void => {
              /* Any click action for this toolbar item will come here. */
            },
          },
          { type: "Separator" },
          {
            text: "DELETE INPUT MODULE",
            prefixIcon: "e-delete-3 e-icons",
            tooltipText: "Delete input module",
            click: (args: ClickEventArgs): void => {
              /* Any click action for this toolbar item will come here. */
            },
          },
        ],
      },
    ]);

    this.spreadsheetObj!.addFileMenuItems(
      [{ text: "NEW FORM", iconCss: "e-file-new e-icons" }],
      "New"
    );

    this.spreadsheetObj!.addFileMenuItems(
      [
        {
          text: "OPEN EXISTING FORM",
          iconCss: "e-folder-open e-icons",
        },
      ],
      "Open",
      false
    );

    this.spreadsheetObj!.addFileMenuItems(
      [{ text: "SAVE FORM", iconCss: "e-save e-icons" }],
      "Save As",
      false
    );

    this.spreadsheetObj!.addFileMenuItems(
      [{ text: "CLOSE FORM", iconCss: "e-close e-icons" }],
      "Save As"
    );
  }

  // Function called when the toggle button is clicked
  toggleButtonClick() {
    this.isToggleButtonActive = !this.isToggleButtonActive;
    const toggleBtn = document.getElementById("toggleTxt");
    if (toggleBtn) {
      toggleBtn.textContent = this.getToggleButtonText();
    }
    if (this.isToggleButtonActive) {
      this.spreadsheetObj.sheets[0].rows = this.sheetRows.slice(0, 2);
      // this.setHeadersAsData(this.headers, this.rawData);
    } else {
      this.spreadsheetObj.sheets[0].rows = this.sheetRows;
      // this.setRawData(this.headers, this.rawData);
    }
  }

  //get text of data entry mode when toggle button clicked
  getToggleButtonText(): string {
    return this.isToggleButtonActive ? "Design Mode" : "Execution Mode";
  }

  //get current toggle button status checked or not
  getToogleButtonStatus(): string {
    return this.isToggleButtonActive ? "checked" : "";
  }

  // update file menu before initializing
  fileMenuBeforeOpen(): void {
    this.spreadsheetObj!.hideFileMenuItems(["Save As", "Open", "New"]);
  }

  // action when clicking file menu item
  fileMenuItemSelect(args: MenuSelectEventArgs): void {
    switch (args.item.text) {
      case "NEW FORM":
        this.openNewFormDialog();
        break;
      case "OPEN EXISTING FORM":
        this.openOpenFormDialog();
        break;
      case "SAVE FORM":
        let jsonObject = this.spreadsheetObj!.sheets[0].rows;
        console.log(jsonObject);
        break;
      case "CLOSE FORM":
        this.openCloseFormDialog();
        break;
    }
  }

  // get current spreadsheet data
  getData(mode = "data"): void {
    this.sheetRows = this.spreadsheetObj.sheets[0].rows;
    let rawData = this.spreadsheetObj.sheets[0].rows.map((row) =>
      row.cells.map((cell) => (cell ? cell.value : ""))
    );
    this.rawData = rawData;

    let headers = rawData.shift();
    this.headers = headers;
  }

  // get header of current spreadsheet
  setHeadersAsData(headers: (string | null)[], rawData: string[][]) {
    const headersRow: RowModel = {
      cells: headers.map((headerText) => ({
        value: headerText,
        style: { fontWeight: "bold" },
      })),
    };
    const dataRows: RowModel[] = rawData.map((rowArray) => ({
      cells: rowArray.map((cellValue) => ({ value: cellValue })),
    }));
    this.spreadsheetObj.sheets[0].rows = [headersRow].concat([dataRows[0]]);
  }

  // get content of current spreadsheet
  setRawData(headers: (string | null)[], rawData: string[][]) {
    const headersRow: RowModel = {
      cells: headers.map((headerText) => ({
        value: headerText,
        style: { fontWeight: "bold" },
      })),
    };

    const dataRows: RowModel[] = rawData.map((rowArray) => ({
      cells: rowArray.map((cellValue) => ({ value: cellValue })),
    }));

    this.spreadsheetObj.sheets[0].rows = [headersRow].concat(dataRows);
  }

  // open new-form dialog
  openNewFormDialog(): void {
    const dialogRef = this.dialog.open(NewFormDialogComponent, {
      width: "450px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.sheetCode = result["code"];
      this.sheetDescription = result["description"];
      this.sheetName = this.sheetCode + " - " + this.sheetDescription;
      console.log("closing open form dialog");
      console.log(this.spreadsheetObj.element.id);
      console.log(`${this.spreadsheetObj.element.id}_CLOSE FORM`);
      this.spreadsheetObj.enableFileMenuItems(
        [`${this.spreadsheetObj.element.id}_CLOSE FORM`],
        false,
        true
      );
    });
  }

  openOpenFormDialog(): void {
    const dialogRef = this.dialog.open(OpenFormDialogComponent, {
      width: "450px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.sheetName = result;
    });
  }

  openNewInputModuleDialog(): void {
    const dialogRef = this.dialog.open(NewInputModuleDialogComponent, {
      width: "450px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.sheetName = result["selectedNodeName"];
      this.spreadsheetObj.sheets[0].rows = this.salary_template;
      this.sheetRows = this.salary_template;
    });
  }

  openCloseFormDialog(): void {
    const dialogRef = this.dialog.open(CloseFormDialogComponent, {
      width: "450px",
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
