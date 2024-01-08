import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { TreeViewModule } from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: "app-new-input-module-dialog",
  templateUrl: "./new-input-module-dialog.component.html",
  styleUrls: ["./new-input-module-dialog.component.scss"],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    TreeViewModule,
  ],
})
export class NewInputModuleDialogComponent {
  public treeData: Object[];
  public field: Object;
  selectedNodeName: string;

  constructor() {
    let existingForms = [
      { "My Databoxes": ["invoces", "products", "Salary from"] },
      { MultiDatabox: null },
    ];

    this.treeData = existingForms.map((item) => {
      let key = Object.keys(item)[0];
      if (item[key]) {
        return {
          id: key,
          text: key,
          child: item[key].map((subItem) => ({ id: subItem, text: subItem })),
        };
      }
      return { id: key, text: key, hasChildren: false };
    });

    this.field = {
      dataSource: this.treeData,
      id: "id",
      text: "text",
      child: "child",
    };
  }

  onNodeSelected(args: any): void {
    let nodeName = args.nodeData["text"];
    this.selectedNodeName = nodeName;
  }
}
