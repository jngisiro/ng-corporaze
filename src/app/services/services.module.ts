import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { IndexComponent } from './index/index.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuditingComponent } from './auditing/auditing.component';
import { NameSearchComponent } from './name-search/name-search.component';
import { NameReservationComponent } from './name-reservation/name-reservation.component';

@NgModule({
  declarations: [
    IndexComponent,
    RegistrationComponent,
    AuditingComponent,
    NameSearchComponent,
    NameReservationComponent,
  ],
  imports: [CommonModule, ServicesRoutingModule],
})
export class ServicesModule {}
