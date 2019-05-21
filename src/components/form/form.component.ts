import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface ISelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent {
  title = 'New BT request';

  startDate: FormControl = new FormControl('');
  endDate: FormControl = new FormControl('');
  // location: FormControl = new FormControl('');
  // office: FormControl = new FormControl('');
  trainTickets: ISelect[] = [
    {value: '1', viewValue: 'train 1'},
    {value: '2', viewValue: 'train 2'},
    {value: '3', viewValue: 'train 3'},
  ];

  plainTickets: ISelect[] = [
    {value: '1', viewValue: 'plain 1'},
    {value: '2', viewValue: 'plain 2'},
    {value: '3', viewValue: 'plain 3'},
  ];

  locations: ISelect[] = [
    {value: '1', viewValue: 'location 1'},
    {value: '2', viewValue: 'location 2'},
    {value: '3', viewValue: 'location 3'}
  ];

  offices: ISelect[] = [
    {value: '1', viewValue: 'office 1'},
    {value: '2', viewValue: 'office 2'},
    {value: '3', viewValue: 'office 3'}
  ];

  hotels: ISelect[] = [
    {value: '1', viewValue: 'hotel 1'},
    {value: '2', viewValue: 'hotel 2'},
    {value: '3', viewValue: 'hotel 3'}
  ];
}
