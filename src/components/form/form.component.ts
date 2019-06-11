import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  form = new FormGroup({
    startDate: new FormControl(new Date(), Validators.required),
    endDate: new FormControl('', Validators.required),
    tickets: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    office: new FormControl('', Validators.required),
    hotel: new FormControl('', Validators.required),
    roomsBooking: new FormControl(''),
    setNotAvailableNotification: new FormControl(''),
  });

  trainTickets: Observable<any>;
  plainTickets: Observable<any>;
  locations: Observable<any>;
  offices: Observable<any>;
  hotels: Observable<any>;
  selectedOffice: Observable<any>;
  selectedLocationCoords: Observable<any> = of(kievOfficeCoords);

  constructor(private http: HttpService) {}

  downloadTickets(): void {
    // TODO should it link came from beck?
    window.open('http://www.africau.edu/images/default/sample.pdf', '_blank');
  }

  downloadEmergency(): void {
    // TODO should it link came from beck?
    window.open('http://www.africau.edu/images/default/sample.pdf', '_blank');
  }

  selectLocation(id: string): void {
    const location = this.http.location(id).pipe(
      take(1),
    );

    this.offices = location.pipe(
      map(({offices}) => offices),
    );
    this.hotels = location.pipe(
      map(({hotels}) => hotels),
    );
    this.trainTickets = location.pipe(
      map(({options}) => options.trains),
    );

    this.plainTickets = location.pipe(
      map(({options}) => options.planes),
    );
    this.selectedLocationCoords = location.pipe(
      map(({latitude, longitude}) => {
        return {latitude, longitude};
      }),
    );

  }

  selectOffice(id: string): void{
    this.selectedOffice = this.offices.pipe(
      map(offices => offices.find(office => office._id === id)),
    );
  }

  onSubmit(): void {
   if (this.form.valid) {
     this.http.submitForm(this.form.value)
       .pipe(take(1))
       .subscribe();
   } else {
     this.form.markAsDirty();
   }
  }

  setTicket(value: string, clearField) {
    this.form.get('tickets').setValue('value');
    this[clearField] = null;
  }

  getLocation() {
    const value = this.form.get('location').value;

    if (value.length > 2) {
      this.locations = this.http.findLocations(value).pipe(
        map(data => data._embedded.geoLocations)
      );
    }
  }
}
