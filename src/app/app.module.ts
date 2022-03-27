import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodayComponent } from './components/today/today.component';
import { TimeConverterPipe } from './pipes/time-converter.pipe';
import { AlertsComponent } from './components/alerts/alerts.component';
import { FormsModule } from '@angular/forms'
import { ForecastComponent } from './components/forecast/forecast.component';
import { DatepipePipe } from './pipes/datepipe.pipe';
import { HistoricalComponent } from './components/historical/historical.component';
import { SubmitzipComponent } from './components/submitzip/submitzip.component';
import { DegreeconverterPipe } from './pipes/degreeconverter.pipe';
import { SigninComponent } from './components/signin/signin.component';
import { CreateComponent } from './components/create/create.component';
import { UpdatezipComponent } from './components/updatezip/updatezip.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodayComponent,
    TimeConverterPipe,
    AlertsComponent,
    ForecastComponent,
    DatepipePipe,
    HistoricalComponent,
    NavbarComponent,
    SubmitzipComponent,
    SigninComponent,
    CreateComponent,
    DegreeconverterPipe,
    UpdatezipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SubmitzipComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
