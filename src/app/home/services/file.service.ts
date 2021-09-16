import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = `${environment.apiUrl}/orderscredential`;
  }

  uploadPresentation(file: File) {
    // A FormData instance is equivalent to an HTML form sent using the multipart/form-data encoding.
    // https://www.techiediaries.com/angular-formdata/
    const formData = new FormData();
    formData.append("file", file);

    return this.http.post(`${this.baseUrl}/pdf`, formData, {
        reportProgress: true,
        observe: 'events'
    })
  }
}
