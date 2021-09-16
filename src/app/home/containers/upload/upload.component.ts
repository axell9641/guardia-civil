import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { FileService } from '../../services/file.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  urlForm: FormGroup;
  allowedExtensions: string;
  selectedFile: File;
  uploadProgress:number;
  uploadSub: Subscription | null;
  get fileUrlCtrl() {
    return this.urlForm.get('fileUrl');
  }
  constructor(
    private fileService: FileService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createUrlForm();
    this.allowedExtensions = environment.documentRules.allowedExtensions
    .map(extension => `.${extension}`)
    .join(', ');
  }

  onFileSelected(file: File) {
    this.selectedFile = file;
  }

  onProcessSelectedFile() {
    this.uploadSub = this.fileService
    .uploadPresentation(this.selectedFile)
    .pipe(
      finalize(() => this.reset())
    )
    .subscribe( event => {
      debugger;
      // this.reportProgress(event);
      if (event.type == HttpEventType.Response) {
        // The upload has been completed
        this.router.navigate([`viewer`], { relativeTo: this.route });
      }
    })
  }

  onCancelUpload() {
    this.uploadSub?.unsubscribe();
    this.reset();
  }

  createUrlForm() {
    const URL_REGEXP = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/
    this.urlForm = this.fb.group({
      fileUrl: [{ value: null , disabled: false }, [Validators.required, Validators.pattern(URL_REGEXP)]],
    });
  } 


  private reportProgress(event: HttpEvent<Object>) {
    if (event.type == HttpEventType.UploadProgress) {
      if (event.total) {
        this.uploadProgress = Math.round(100 * (event.loaded / event.total));
      }
    }
  }

  private reset() {
    this.uploadProgress = 0;
    this.uploadSub = null;
  }
}
