import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService, ILocation } from '../../services/http.service';
import { Observable, of } from 'rxjs';
import { map, find } from 'rxjs/operators';

const kievOfficeCoords = {
  latitude: 50.462673,
  longitude: 30.449547,
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent {
  title = 'New BT request';

  startDate: FormControl = new FormControl('');
  endDate: FormControl = new FormControl('');
  trainTickets: Observable<any>;
  plainTickets: Observable<any>;
  locations: Observable<any>;
  offices: Observable<any>;
  hotels: Observable<any>;

  selectedOffice: Observable<any>;
  selectedLocationCoords: Observable<any> = of(kievOfficeCoords);

  constructor(private http: HttpService) {
    this.locations = this.http.locations().pipe(
      map(data => data._embedded.geoLocations),
    );
    this.offices = this.http.offices().pipe(
      map(data => data._embedded.offices),
    );
    this.hotels = this.http.hotels().pipe(
      map(data => data._embedded.hotels),
    );

    const tickets = this.http.ticketOptions().pipe(
      map(data => data._embedded.ticketOptions[0]),
    );

    this.trainTickets = tickets.pipe(
      map(data => data.trains),
    );

    this.plainTickets = tickets.pipe(
      map(data => data.planes),
    );
  }

  downloadTickets(): void {
    console.log('downloadTickets');
  }

  downloadEmergency(): void {
    console.log('Download emergency contact list');
  }

  selectLocation(id: string): void {
    this.selectedLocationCoords = this.locations.pipe(
      map(locations => locations.find(office => office.id === id)),
      map(({latitude, longitude}) => {
        return {
          latitude,
          longitude,
        };
      })
    );

    // this.selectedLocationCoords.subscribe(data => console.log(data))
  }

  selectOffice(id: string): void{
    this.selectedOffice = this.offices.pipe(
      map(offices => offices.find(office => office._id === id)),
    );
  }
}
