import { Component, OnInit } from '@angular/core';
import { ControlObject, ControlObjectLabel } from '../../API.service';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

type UIControlObject = {
  tenantId: string,
  code: string,
  description: string,
  image: string,
  labels: String[]
}

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-control-object-upsert',
  templateUrl: './control-object-upsert.component.html',
  styleUrls: ['./control-object-upsert.component.scss'],
  providers: [DialogService]
})
export class ControlObjectUpsertComponent implements OnInit {

  edit: boolean;
  controlObjectLabels: ControlObjectLabel[] = [];
  controlObject: UIControlObject = {
    tenantId: undefined,
    code: undefined,
    description: undefined,
    image: undefined,
    labels: []
  };
  filePreview: string;
  selectedControlObjectLabels: ControlObjectLabel[] = [];

  constructor(public elementRef: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.edit = config.data.edit;
    this.controlObjectLabels = config.data.controlObjectLabels;
    if (config.data.controlObject) {
      this.controlObject = {
        tenantId: config.data.controlObject.tenantId,
        code: config.data.controlObject.code,
        description: config.data.controlObject.description,
        image: config.data.controlObject.image,
        labels: config.data.controlObject.labels
      };
      this.filePreview = config.data.controlObject.image;
      this.selectedControlObjectLabels = this.controlObjectLabels.filter(l => config.data.controlObject.labels.some((e) => l.code === e));
    }
  }

  ngOnInit() {

  }

  onUpload(event: UploadEvent) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.filePreview = e.target.result;
    }
    reader.readAsDataURL(event.files[0]);
  }

  cancel() {
    this.elementRef.close();
  }

  save() {
    this.elementRef.close({
      tenantId: this.controlObject.tenantId,
      code: this.controlObject.code,
      description: this.controlObject.description,
      labels: this.selectedControlObjectLabels.map(l => l.code),
      image: this.filePreview
    } as ControlObject);
  }

}
