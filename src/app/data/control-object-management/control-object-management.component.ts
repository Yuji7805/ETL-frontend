import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIService, ControlObject, ControlObjectField, ControlObjectLabel, CreateControlObjectInput, UpdateControlObjectInput, DeleteControlObjectInput } from '../../API.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MultiSelectChangeEvent } from 'primeng/multiselect';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ControlObjectLabelComponent } from '../control-object-label/control-object-label.component';
import { ControlObjectUpsertComponent } from '../control-object-upsert/control-object-upsert.component';
import { ControlObjectFieldsComponent } from '../control-object-fields/control-object-fields.component';
import { ControlObjectDataComponent } from '../control-object-data/control-object-data.component';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-control-object-management',
  templateUrl: './control-object-management.component.html',
  styleUrls: ['./control-object-management.component.scss'],
  providers: [DialogService, ConfirmationService, MessageService]
})
export class ControlObjectManagementComponent implements OnInit, OnDestroy {

  controlObjectLabels: Array<ControlObjectLabel> = [];
  controlObjects: Array<ControlObject> = [];
  private controlObjectCreateSubscription: ZenObservable.Subscription | null = null;
  private controlObjectUpdateSubscription: ZenObservable.Subscription | null = null;
  private controlObjectDeleteSubscription: ZenObservable.Subscription | null = null;
  labelsRef: DynamicDialogRef | undefined;
  elementRef: DynamicDialogRef | undefined;
  fieldsRef: DynamicDialogRef | undefined;
  dataRef: DynamicDialogRef | undefined;

  constructor(
    private api: APIService,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {
  }

  async ngOnInit() {
    this.loadData();
    this.controlObjectCreateSubscription = this.api.OnCreateControlObjectListener().subscribe(
      (event: any) => {
        console.log(event);
        const newControlObject = event.value.data.onCreateControlObject as ControlObject;
        this.controlObjects.push(newControlObject)
        this.controlObjects.sort((a,b) => a.code.localeCompare(b.code));
      }
    );
    this.controlObjectUpdateSubscription = this.api.OnUpdateControlObjectListener().subscribe(
      (event: any) => {
        console.log(event);
        const updControlObject = event.value.data.onUpdateControlObject as ControlObject;
        this.controlObjects = this.controlObjects.map(i => i.tenantId == updControlObject.tenantId && i.code == updControlObject.code ? updControlObject : i).sort((a,b) => a.code.localeCompare(b.code));
      }
    );
    this.controlObjectDeleteSubscription = this.api.OnDeleteControlObjectListener().subscribe(
      (event: any) => {
        const delControlObject = event.value.data.onDeleteControlObject as ControlObject;
        this.controlObjects = this.controlObjects.filter(i => !(i.tenantId == delControlObject.tenantId && i.code == delControlObject.code)).sort((a,b) => a.code.localeCompare(b.code));
      }
    );
  }

  ngOnDestroy() {
    if (this.controlObjectCreateSubscription) {
      this.controlObjectCreateSubscription.unsubscribe();
    }
    this.controlObjectCreateSubscription = null;
    if (this.controlObjectUpdateSubscription) {
      this.controlObjectUpdateSubscription.unsubscribe();
    }
    this.controlObjectUpdateSubscription = null;
    if (this.controlObjectDeleteSubscription) {
      this.controlObjectDeleteSubscription.unsubscribe();
    }
    this.controlObjectDeleteSubscription = null;
    if (this.labelsRef) {
      this.labelsRef.close();
    }
    if (this.elementRef) {
      this.elementRef.close();
    }
    if (this.fieldsRef) {
      this.fieldsRef.close();
    }
    if (this.dataRef) {
      this.dataRef.close();
    }
  }

  loadData() {
    Auth.currentAuthenticatedUser()
      .then(data => {
        this.api.ListControlObjectLabel({ tenantId: { eq: data.signInUserSession.accessToken.payload['cognito:groups'][0] } }).then((event) => {
          this.controlObjectLabels = event.items as ControlObjectLabel[];
        });
        return data;
      })
      .then(data => {
        this.api.ListControlObjects({ tenantId: { eq: data.signInUserSession.accessToken.payload['cognito:groups'][0] } }).then((event) => {
          this.controlObjects = event.items as ControlObject[];
        });
      });
  }

  filterControlObjectByLabel(event?: MultiSelectChangeEvent) {
    Auth.currentAuthenticatedUser()
      .then(data => {
        this.api.ListControlObjects({ tenantId: { eq: data.signInUserSession.accessToken.payload['cognito:groups'][0] } }).then((e) => {
          if (event == null || event.value == null || event.value.length == 0) {
            this.controlObjects = (e.items as ControlObject[]);
          } else {
            this.controlObjects = (e.items as ControlObject[]).filter(c => (event.value as ControlObjectLabel[]).map(l => l.code).some(l => c.labels.includes(l)));
          }
        });
      });
  }

  showControlObjectForm(controlObject: ControlObject, edit: Boolean) {
    this.elementRef = this.dialogService.open(
      ControlObjectUpsertComponent,
      {
        data: {
          controlObject: controlObject,
          controlObjectLabels: this.controlObjectLabels,
          edit: edit
        },
        header: edit ? 'Edit control object' : 'Create control object',
        styleClass: 'dynamicDialog',
        width: '30%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        closable: false
      }
    );
    this.elementRef.onClose.subscribe((controlObject: ControlObject) => {
      Auth.currentAuthenticatedUser()
        .then(data => {
          if (edit == true) {
            this.api.UpdateControlObject(
              {
                tenantId: data.signInUserSession.accessToken.payload['cognito:groups'][0],
                code: controlObject.code,
                description: controlObject.description,
                labels: controlObject.labels,
                image: controlObject.image
              } as UpdateControlObjectInput)
              .then(() => {
                this.messageService.clear();
                this.messageService.add({ severity: 'success', summary: 'Control object', detail: 'updated: ' + controlObject.code });
                console.log('control object updated!');
              })
              .catch((e) => {
                this.messageService.clear();
                this.messageService.add({ severity: 'error', summary: 'Control object', detail: 'error updating: ' + controlObject.code });
                console.log('error updating control object...', e);
              });
          } else {
            this.api.CreateControlObject({
              tenantId: data.signInUserSession.accessToken.payload['cognito:groups'][0],
              code: controlObject.code,
              description: controlObject.description,
              labels: controlObject.labels,
              image: controlObject.image
            } as CreateControlObjectInput)
              .then(() => {
                this.messageService.clear();
                this.messageService.add({ severity: 'success', summary: 'Control object', detail: 'created: ' + controlObject.code });
                console.log('control object created!');
              })
              .catch((e) => {
                this.messageService.clear();
                this.messageService.add({ severity: 'error', summary: 'Control object', detail: 'error creating: ' + controlObject.code });
                console.log('error creating control object...', e);
              });
          }
        });
    });
  }

  showControlObjectLabelForm() {
    this.labelsRef = this.dialogService.open(
      ControlObjectLabelComponent,
      {
        header: 'Control object labels',
        styleClass: 'dynamicDialog',
        width: '50%',
        height: '80%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
      }
    );
    this.labelsRef.onClose.subscribe(() => {
      this.loadData();
    });
  }

  showControlObjectFields(controlObject: ControlObject) {
    this.fieldsRef = this.dialogService.open(
      ControlObjectFieldsComponent,
      {
        data: {
          fields: controlObject.fields
        },
        header: 'Control object fields',
        styleClass: 'dynamicDialog',
        width: '70%',
        height: '80%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
      }
    );
    this.fieldsRef.onClose.subscribe((fields: ControlObjectField[]) => {
      if (fields) {
        this.api.UpdateControlObject(
          {
            tenantId: controlObject.tenantId,
            code: controlObject.code,
            description: controlObject.description,
            image: controlObject.image,
            fields: fields
          } as UpdateControlObjectInput
        )
          .then(() => {
            this.loadData();
            console.log('control object fields updated!');
          })
          .catch((e) => {
            console.log('error updating control object fields...', e);
          });
      }
    });
  }

  showControlObjectData(controlObject: ControlObject) {
    this.dataRef = this.dialogService.open(
      ControlObjectDataComponent,
      {
        data: {
          controlObject: controlObject
        },
        header: 'Control object data',
        styleClass: 'dynamicDialog',
        width: '70%',
        height: '80%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
      }
    );
    this.dataRef.onClose.subscribe(() => {

    });
  }

  confirmControlObjectDeletion(event: Event, controlObject: ControlObject) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to delete this Control object?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      accept: () => {
        this.api.DeleteControlObject({
          tenantId: controlObject.tenantId,
          code: controlObject.code
        } as DeleteControlObjectInput)
          .then(() => {
            this.loadData();
            console.log('control object deleted!');
          })
          .catch((e) => {
            console.log('error deleting control object...', e);
          });
        this.messageService.clear();
        this.messageService.add({ severity: 'success', summary: 'Control object', detail: 'Deleted!' });
      }
    });
  }

  getControlObjectLabelColor(labelCode: String): String {
    return this.controlObjectLabels.filter(l => l.code === labelCode).map(l => l.color)[0];
  }

}
