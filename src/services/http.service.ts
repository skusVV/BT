import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  locations(): Observable<any> {
    return this.http.get<any>('http://vgog.tk/api/geoLocations');
  }

  location(id: string): Observable<any> {
    return this.http.get<any>(`http://vgog.tk/api/geoLocations/${id}`).pipe(share());
  }

  submitForm(data: any): Observable<any> {
    return this.http.post('`http://vgog.tk/api/bussinesstrip', data);
  }
}
