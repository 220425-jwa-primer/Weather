import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { TodayComponent } from './today/today.component';
import { TimeConverterPipe } from './time-converter.pipe';
import { AlertsComponent } from './alerts/alerts.component';
import { FormsModule } from '@angular/forms'
import { ForecastComponent } from './components/forecast/forecast.component';
import { DatepipePipe } from './pipes/datepipe.pipe';
import { HistoricalComponent } from './components/historical/historical.component';
import { SubmitzipComponent } from './components/submitzip/submitzip.component';
import { SigninComponent } from './signin/signin.component';
import { CreateComponent } from './create/create.component';
import { DegreeconverterPipe } from './pipes/degreeconverter.pipe';
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
    DegreeconverterPipe
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
