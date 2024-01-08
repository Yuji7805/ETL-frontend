import { Component, OnInit } from "@angular/core";
import { AppMainComponent } from "./app.main.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./app.menu.component.html",
})
export class AppMenuComponent implements OnInit {
  model: any[];

  constructor(public appMain: AppMainComponent) {}

  ngOnInit() {
    this.model = [
      { label: "Home", icon: "pi pi-fw pi-home", routerLink: ["/"] },
      {
        label: "Control objects",
        icon: "pi pi-fw pi-stop",
        routerLink: ["/control-objects"],
      },
      {
        label: "Databoxes",
        icon: "pi pi-fw pi-box",
        routerLink: ["/databoxes"],
      },
      {
        label: "Data integration",
        icon: "pi pi-fw pi-arrows-v",
        routerLink: ["/data-integration"],
      },
      {
        label: "Data entry",
        icon: "pi pi-fw pi-file-edit",
        routerLink: ["/data-entry"],
      },
      {
        label: "Perscriptive analytics",
        icon: "pi pi-fw pi-chart-line",
        routerLink: ["/perscriptive-analytics"],
      },
      {
        label: "Dashboarding",
        icon: "pi pi-fw pi-chart-bar",
        routerLink: ["/dashboarding"],
      },
      { label: "Logs", icon: "pi pi-fw pi-list", routerLink: ["/logs"] },
    ];
  }

  onMenuClick(): void {
    this.appMain.menuClick = true;
  }
}
