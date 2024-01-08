import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import {
  SpreadsheetComponent,
  getFormatFromType,
} from "@syncfusion/ej2-angular-spreadsheet";

import { SpreadsheetModule } from "@syncfusion/ej2-angular-spreadsheet";
/**
 * Cell Data Binding Spreadsheet Controller
 */
@Component({
  selector: "ejs-spreadsheet",
  templateUrl: "spreadsheet.html",
  styleUrls: ["spreadsheet.css"],
  imports: [SpreadsheetModule],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class SyncSpreadsheet {
  constructor(/*@Inject('sourceFiles') private sourceFiles: any*/) {
    // sourceFiles.files = ['spreadsheet.css'];
  }
  public openUrl: string =
    "https://services.syncfusion.com/angular/production/api/spreadsheet/open";
  public saveUrl: string =
    "https://services.syncfusion.com/angular/production/api/spreadsheet/save";

  // Define the ribbon settings including Open and Save
  public ribbon: object = {
    // Exclude the default File tab
    fileMenuItem: {
      hideFileMenuItems: ["New", "Open", "Save", "SaveAs", "Exit"],
    },
    items: [
      {
        type: "Button",
        text: "Custom Open",
        tooltipText: "Custom Open",
        id: "custom-open",
        disabled: false,
      },
      {
        type: "Button",
        text: "Custom Save",
        tooltipText: "Custom Save",
        id: "custom-save",
        disabled: false,
      },
      // ... other toolbar items
    ],
  };
  @ViewChild("cellDataBind")
  public spreadsheetObj: SpreadsheetComponent;
  public styles = { fontWeight: "bold", textAlign: "center" };
  public styles2 = { fontWeight: "bold", textAlign: "right" };
  public styles3 = { fontWeight: "bold" };
  currencyFormat: string = getFormatFromType("Currency");
}
