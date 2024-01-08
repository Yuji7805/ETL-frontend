import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: "app-new-form-dialog",
  templateUrl: "./new-form-dialog.component.html",
  styleUrls: ["./new-form-dialog.component.scss"],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
  ],
})
export class NewFormDialogComponent {}
