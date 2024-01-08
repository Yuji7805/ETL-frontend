import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
	selector: 'app-rightpanel',
	template: `
        <div class="layout-rightpanel" (click)="appMain.onRightPanelClick($event)">
			<div class="right-panel-header">
				<div class="title">
					<span>Today</span>
					<h1>{{this.currentDate|date:'fullDate'}}</h1>
				</div>
				<a href="#" class="rightpanel-exit-button" (click)="appMain.onRightPanelClose($event)">
					<i class="pi pi-times"></i>
				</a>
			</div>
			<div class="right-panel-content">
				<div class="right-panel-content-row">
					<div class="calendar">
						<h1>Calendar</h1>
						<p-calendar [inline]="true"></p-calendar>
					</div>
				</div>
            </div>
        </div>
    `
})
export class AppRightPanelComponent implements OnInit {

	currentDate: Date;

	constructor(public appMain: AppMainComponent) {

	}

	ngOnInit(): void {
		this.currentDate = new Date();
	}

}
