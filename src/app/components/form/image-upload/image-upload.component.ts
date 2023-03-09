import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  @Input() value?: string = "";
  @Output() change = new EventEmitter<string>();

  file: any = "";

  constructor() {
    this.file = this.value;
  }


  onSelect(event: any) {
    const reader = new FileReader();
    reader.readAsDataURL(event.addedFiles[0]);
    reader.onload = () => {
      this.file = reader.result;
      this.change.emit(this.file);
    };
    reader.onerror =  () => {
      this.file = "";
      this.change.emit("");
    };
  }

  onRemove() {
    this.file = "";
  }
}
