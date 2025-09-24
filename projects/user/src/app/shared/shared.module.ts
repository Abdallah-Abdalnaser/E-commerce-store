import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { StoreServiceComponent } from './components/header/store-service/store-service.component';
import { CatigoriesListComponent } from './components/header/store-service/catigories-list/catigories-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AllCategoryDirective } from './components/header/store-service/all-category.directive';
import { LoginformComponent } from './components/header/loginform/loginform.component';
import { CartListComponent } from './components/header/cart-list/cart-list.component';
import { FavouriteListComponent } from './components/header/favourite-list/favourite-list.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StoreServiceComponent,
    CatigoriesListComponent,
    AllCategoryDirective,
    LoginformComponent,
    CartListComponent,
    FavouriteListComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
    CoreModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
