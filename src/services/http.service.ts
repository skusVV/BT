import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  location(id: string): Observable<any> {
    return this.http.get<any>(`http://vgog.tk/api/geoLocations/${id}`).pipe(share());
  }

  submitForm(data: any): Observable<any> {
    return this.http.post('http://vgog.tk/api/businessTripRequests', data);
  }

  findLocations(value: string): Observable<any> {
    return this.http.get(`http://vgog.tk/api/geoLocations/search/findByCityStartingWith?city=${value}`);
  }
}
