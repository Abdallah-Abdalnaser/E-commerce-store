import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { StoreServiceComponent } from './components/header/store-service/store-service.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StoreServiceComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
