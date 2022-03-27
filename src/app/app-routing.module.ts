import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './components/today/today.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { SigninComponent} from './components/signin/signin.component';
import { CreateComponent } from './components/create/create.component';
import { UpdatezipComponent } from './components/updatezip/updatezip.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path:'today', component: TodayComponent},
  {path:'alerts', component: AlertsComponent},
  {path: 'forecast', component: ForecastComponent},
  {path: 'historical', component: HistoricalComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'create', component: CreateComponent},
  {path: 'updatezip', component: UpdatezipComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
