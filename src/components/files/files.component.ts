import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const FILE_UPLOAD_URL = 'lolo';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.less']
})
export class FilesComponent {
  uploader: FileUploader = new FileUploader({url: FILE_UPLOAD_URL});
  hasBaseDropZoneOver: boolean = false;

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
