import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatNativeDateModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AgmCoreModule } from '@agm/core';
import { FileUploadModule } from 'ng2-file-upload';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { FormComponent } from '../components/form/form.component';
import { MapComponent } from '../components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    }),
    FileUploadModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
