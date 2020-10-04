import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditingComponent } from './auditing/auditing.component';
import { IndexComponent } from './index/index.component';
import { NameReservationComponent } from './name-reservation/name-reservation.component';
import { NameSearchComponent } from './name-search/name-search.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'name-search',
    component: NameSearchComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'auditing',
    component: AuditingComponent,
  },
  {
    path: 'name-reservation',
    component: NameReservationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
