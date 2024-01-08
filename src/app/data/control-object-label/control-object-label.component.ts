import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIService, ControlObjectLabel, CreateControlObjectLabelInput, UpdateControlObjectLabelInput, DeleteControlObjectLabelInput } from '../../API.service';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';
import { Auth } from 'aws-amplify';

type UILabel = {
  isNew: boolean,
  isEdit: boolean,
  id: string,
  label: ControlObjectLabel
}

@Component({
  selector: 'app-control-object-label',
  templateUrl: './control-object-label.component.html',
  styleUrls: ['./control-object-label.component.scss'],
  providers: [MessageService, DialogService, ConfirmationService]
})
export class ControlObjectLabelComponent implements OnInit, OnDestroy {

  labels: UILabel[] = [];
  upsertLabels: UILabel[] = [];
  deleteLabels: UILabel[] = [];
  private controlObjectLabelCreateSubscription: ZenObservable.Subscription | null = null;
  private controlObjectLabelUpdateSubscription: ZenObservable.Subscription | null = null;
  private controlObjectLabelDeleteSubscription: ZenObservable.Subscription | null = null;

  constructor(private api: APIService, private messageService: MessageService, public labelsRef: DynamicDialogRef, public config: DynamicDialogConfig, private confirmationService: ConfirmationService) {

  }

  ngOnInit() {
    this.loadData();
    this.controlObjectLabelCreateSubscription = this.api.OnCreateControlObjectLabelListener().subscribe(
      (event: any) => {
        const newLabel = event.value.data.onCreateControlObjectLabel as ControlObjectLabel;
        this.labels = this.labels
          .map(i => i.label.tenantId == newLabel.tenantId && i.label.code == newLabel.code ? { isNew: false, isEdit: false, id: this.createId(), label: newLabel } : i)
          .sort((a, b) => a.label.code.localeCompare(b.label.code));
      }
    );
    this.controlObjectLabelUpdateSubscription = this.api.OnUpdateControlObjectLabelListener().subscribe(
      (event: any) => {
        const updLabel = event.value.data.onUpdateControlObjectLabel as ControlObjectLabel;
        this.labels = this.labels
          .map(i => i.label.tenantId == updLabel.tenantId && i.label.code == updLabel.code ? { isNew: false, isEdit: false, id: this.createId(), label: updLabel } : i)
          .sort((a, b) => a.label.code.localeCompare(b.label.code));
      }
    );
    this.controlObjectLabelDeleteSubscription = this.api.OnDeleteControlObjectLabelListener().subscribe(
      (event: any) => {
        const delLabel = event.value.data.onDeleteControlObjectLabel as ControlObjectLabel;
        this.labels = this.labels
          .filter(i => !(i.label.tenantId == delLabel.tenantId && i.label.code == delLabel.code))
          .sort((a, b) => a.label.code.localeCompare(b.label.code));
      }
    );
  }

  ngOnDestroy() {
    if (this.controlObjectLabelCreateSubscription) {
      this.controlObjectLabelCreateSubscription.unsubscribe();
    }
    this.controlObjectLabelCreateSubscription = null;
    if (this.controlObjectLabelUpdateSubscription) {
      this.controlObjectLabelUpdateSubscription.unsubscribe();
    }
    this.controlObjectLabelUpdateSubscription = null;
    if (this.controlObjectLabelDeleteSubscription) {
      this.controlObjectLabelDeleteSubscription.unsubscribe();
    }
    this.controlObjectLabelDeleteSubscription = null;
  }

  createNewLabel() {
    Auth.currentAuthenticatedUser().then(data => {
      let newLabel = {
        isNew: true,
        isEdit: false,
        id: this.createId(),
        label: {
          tenantId: data.signInUserSession.accessToken.payload['cognito:groups'][0],
          code: "",
          description: "",
          color: "#ff0000"
        } as ControlObjectLabel
      } as UILabel;
      this.labels.push(newLabel);
      this.labels.sort((a, b) => a.label.code.localeCompare(b.label.code));
      this.upsertLabels.push(newLabel);
    });
  }

  itemChange(label: UILabel) {
    if (label && label.isNew == false) {
      label.isEdit = true;
      this.upsertLabels.push(label);
    }
  }

  deleteSelectedLabels() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected labels?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        Auth.currentAuthenticatedUser().then(data => {
          for (let i = 0; i < this.deleteLabels.length; i++) {
            let label = this.deleteLabels[i];
            if (label.isNew) {
              continue;
            }
            this.api.DeleteControlObjectLabel(
              {
                tenantId: data.signInUserSession.accessToken.payload['cognito:groups'][0],
                code: label.label.code,
              } as DeleteControlObjectLabelInput
            ).then(() => {
              this.messageService.add({ severity: 'success', summary: 'Control object label', detail: 'deleted: ' + label.label.code });
              console.log('control object label deleted!');
            }).catch((e) => {
              this.messageService.add({ severity: 'success', summary: 'Control object label', detail: 'deleting error: ' + label.label.code });
              console.log('error deleting control object label...', e);
            });
          }
        }).finally(() => this.deleteLabels = []);
      }
    });
  }

  deleteSingleLabel(label: UILabel) {
    if (label.isNew) {
      return;
    }
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + label.label.code + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        Auth.currentAuthenticatedUser().then(data => {
          this.api.DeleteControlObjectLabel(
            {
              tenantId: data.signInUserSession.accessToken.payload['cognito:groups'][0],
              code: label.label.code,
            } as DeleteControlObjectLabelInput
          ).then(() => {
            console.log('control object label deleted!');
            this.messageService.add({ severity: 'success', summary: 'Control object label', detail: 'deleted: ' + label.label.code });
          }).catch((e) => {
            console.log('error deleting control object label...', e);
            this.messageService.add({ severity: 'success', summary: 'Control object label', detail: 'deleting error: ' + + label.label.code });
          });
        });
      }
    });
  }

  reload() {
    this.labels = [];
    this.upsertLabels = [];
    this.deleteLabels = [];
    this.loadData();
  }

  saveNewAndEdited() {
    Auth.currentAuthenticatedUser().then(data => {
      for (let i = 0; i < this.labels.length; i++) {
        let label = this.labels[i];
        if (label.isNew == true) {
          this.api.CreateControlObjectLabel(
            {
              tenantId: data.signInUserSession.accessToken.payload['cognito:groups'][0],
              code: label.label.code,
              description: label.label.description,
              color: label.label.color
            } as CreateControlObjectLabelInput
          ).then(() => {
            this.messageService.add({ severity: 'success', summary: 'Control object label', detail: 'created: ' + label.label.code });
            console.log('control object label created!');
          }).catch((e) => {
            this.messageService.add({ severity: 'error', summary: 'Control object label', detail: 'creation error: ' + label.label.code });
            console.log('error creating control object label...', e);
          });
        } else if (label.isEdit == true) {
          this.api.UpdateControlObjectLabel(
            {
              tenantId: data.signInUserSession.accessToken.payload['cognito:groups'][0],
              code: label.label.code,
              description: label.label.description,
              color: label.label.color
            } as UpdateControlObjectLabelInput
          ).then(() => {
            this.messageService.add({ severity: 'success', summary: 'Control object label', detail: 'updated: ' + label.label.code });
            console.log('control object label updated!');
          }).catch((e) => {
            this.messageService.add({ severity: 'error', summary: 'Control object label', detail: 'updating error: ' + label.label.code });
            console.log('error updating control object label...', e);
          });
        }
      }
    }).finally(() => this.upsertLabels = []);
  }

  loadData(): void {
    Auth.currentAuthenticatedUser().then(data => {
      this.api.ListControlObjectLabel({ tenantId: { eq: data.signInUserSession.accessToken.payload['cognito:groups'][0] } }).then((event) => {
        (event.items as ControlObjectLabel[])
          .map(l => { return { isNew: false, isEdit: false, id: this.createId(), label: l } as UILabel })
          .forEach(l => { this.labels.push(l); });
      });
    });
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.labels.length; i++) {
      if (this.labels[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

}
