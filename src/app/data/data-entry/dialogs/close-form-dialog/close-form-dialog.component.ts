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
  selector: "app-close-form-dialog",
  templateUrl: "./close-form-dialog.component.html",
  styleUrls: ["./close-form-dialog.component.scss"],
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
export class CloseFormDialogComponent {}
