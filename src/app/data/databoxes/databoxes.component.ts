import { Component, OnInit } from '@angular/core';
import { Databox } from './databox';
import { DataboxesService } from './databoxes.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-databoxes',
  templateUrl: './databoxes.component.html',
  styleUrls: ['./databoxes.component.scss']
})
export class DataboxesComponent  implements OnInit  {
  databoxes!: Databox[];

  constructor(private databoxesService: DataboxesService, /*private messageService: MessageService, private confirmationService: ConfirmationService*/) {}

    ngOnInit() {
      //this.databoxesService.getDataboxes().subscribe({next: (data) => {this.databoxes = data; }});
    }
/*
    openNew() {
      this.databox = {code: '', description: '', databoxType: ''};
      this.submitted = false;
      this.databoxDialog = true;
    }

    deleteSelectedDataboxes() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected databoxes?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.databoxes = this.databoxes.filter((val) => !this.selectedDataboxes?.includes(val));
                this.selectedDataboxes = null;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Databoxes Deleted', life: 3000 });
            }
        });
    }

    editDatabox(databox: Databox) {
        this.databox = { ...databox };
        this.databoxDialog = true;
    }

    deleteDatabox(databox: Databox) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + databox.description + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.databoxes = this.databoxes.filter((val) => val.code !== databox.code);
                this.databox = {code: '', description: '', databoxType: ''};
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Databox Deleted', life: 3000 });
            }
        });
    }

    hideDialog() {
        this.databoxDialog = false;
        this.submitted = false;
    }

    saveDatabox() {
        this.submitted = true;

        if (this.databox.description?.trim()) {
            if (this.databox.code) {
                this.databoxes[this.findIndexByCode(this.databox.code)] = this.databox;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Databox Updated', life: 3000 });
            } else {
                this.databox.code = this.createId();
                this.databoxes.push(this.databox);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Databox Created', life: 3000 });
            }

            this.databoxes = [...this.databoxes];
            this.databoxDialog = false;
            this.databox = {code: '', description: '', databoxType: ''};
        }
    }

    findIndexByCode(code: string): number {
        let index = -1;
        for (let i = 0; i < this.databoxes.length; i++) {
            if (this.databoxes[i].code === code) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
 */
} 
