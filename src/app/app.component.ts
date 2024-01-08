import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { Router } from "@angular/router"; // Import Router

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  horizontalMenu: boolean;
  darkMode = false;
  menuColorMode = "light";
  menuColor = "layout-menu-light";
  themeColor = "blue";
  layoutColor = "blue";
  ripple = true;
  inputStyle = "outlined";

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {} // Inject Router via constructor

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
