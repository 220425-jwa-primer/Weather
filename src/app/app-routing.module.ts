import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './components/today/today.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { SigninComponent} from './components/signin/signin.component';
import { CreateComponent } from './components/create/create.component';
import { UpdatezipComponent } from './components/updatezip/updatezip.component';
const routes: Routes = [
  {path:'today', component: TodayComponent},
  {path:'alerts', component: AlertsComponent},
  {path: 'forecast', component: ForecastComponent},
  {path: 'historical', component: HistoricalComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'create', component: CreateComponent},
  {path: 'updatezip', component: UpdatezipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
