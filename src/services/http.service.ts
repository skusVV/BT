import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface ILocation {
  name: string;
  id: number;
}
// businessTripRequests: {href: "http://vgog.tk/api/businessTripRequests{?page,size,sort}", templated: true}
// employees: {href: "http://vgog.tk/api/employees{?page,size,sort}", templated: true}
// geoLocations: {href: "http://vgog.tk/api/geoLocations{?page,size,sort}", templated: true}
// hotels: {href: "http://vgog.tk/api/hotels{?page,size,sort}", templated: true}
// offices: {href: "http://vgog.tk/api/offices{?page,size,sort}", templated: true}
// profile: {href: "http://vgog.tk/api/profile"}
// ticketOptions: {href: "http://vgog.tk/api/ticketOptions{?page,size,sort}", templated: true}

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  locations(): Observable<any> {
    return this.http.get<any>('http://vgog.tk/api/geoLocations');
  }

  offices(): Observable<any> {
    return this.http.get<any>('http://vgog.tk/api/offices');
  }
  hotels(): Observable<any> {
    return this.http.get<any>('http://vgog.tk/api/hotels');
  }

  ticketOptions(): Observable<any> {
    return this.http.get<any>('http://vgog.tk/api/ticketOptions');
  }
}
