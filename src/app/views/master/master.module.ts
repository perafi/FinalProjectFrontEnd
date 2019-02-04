import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MasterRouting} from './master.routing';
import {ListCategoryDeviceComponent} from './category-device/list-category-device/list-category-device.component';
import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';
import {ListCategoryWarnaComponent} from './category-warna/list-category-warna/list-category-warna.component';
import {NewCategoryWarnaComponent} from './category-warna/new-category-warna/new-category-warna.component';
import {UpdateCategoryWarnaComponent} from './category-warna/update-category-warna/update-category-warna.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryDeviceService} from './category-device/category-device.service';
import {AuthenticationInterceptor} from '../../_auth/auth.interceptor';
import {DataTablesModule} from 'angular-datatables';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    MasterRouting,
    AlertModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    ListCategoryDeviceComponent,
    NewCategoryDeviceComponent,
    UpdateCategoryDeviceComponent,
    ListCategoryWarnaComponent,
    NewCategoryWarnaComponent,
    UpdateCategoryWarnaComponent
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthenticationInterceptor
    },
    CategoryDeviceService
  ]
})
export class MasterModule {
}
