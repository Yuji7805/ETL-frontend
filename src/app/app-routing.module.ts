import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { DashboardDemoComponent } from "./demo/view/dashboarddemo.component";

import { AppMainComponent } from "./app.main.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { AppErrorComponent } from "./pages/app.error.component";
import { AppAccessdeniedComponent } from "./pages/app.accessdenied.component";
import { AppLoginComponent } from "./pages/app.login.component";
import { ControlObjectManagementComponent } from "./data/control-object-management/control-object-management.component";
import { DataboxManagementComponent } from "./data/databox-management/databox-management.component";
import { SyncSpreadsheet } from "./components/spreadsheet.component";
import { DataEntry } from "./data/data-entry/data-entry.component";
import { NewFormDialogComponent } from "./data/data-entry/dialogs/new-form-dialog/new-form-dialog.component";
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: "",
          component: AppMainComponent,
          children: [
            { path: "", component: DashboardDemoComponent },
            {
              path: "control-objects",
              component: ControlObjectManagementComponent,
            },
            { path: "databoxes", component: DataboxManagementComponent },
            { path: "data-entry", component: DataEntry },
            // { path: "data-entry", component: NewFormDialogComponent },
          ],
        },
        { path: "error", component: AppErrorComponent },
        { path: "accessdenied", component: AppAccessdeniedComponent },
        { path: "notfound", component: AppNotfoundComponent },
        { path: "login", component: AppLoginComponent },
        { path: "data-entry-new", component: SyncSpreadsheet },
        { path: "**", redirectTo: "/notfound" },
      ],
      { scrollPositionRestoration: "enabled" }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
