import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCategoryDeviceComponent} from './category-device/list-category-device/list-category-device.component';
import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';
import {ListCategoryWarnaComponent} from './category-warna/list-category-warna/list-category-warna.component';
import {NewCategoryWarnaComponent} from './category-warna/new-category-warna/new-category-warna.component';
import {UpdateCategoryWarnaComponent} from './category-warna/update-category-warna/update-category-warna.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master'
    },
    children: [
      {
        path: 'category-device',
        component: ListCategoryDeviceComponent,
        data: {
          title: 'Category of Devices'
        }
      },
      {
        path: 'category-device/new',
        component: NewCategoryDeviceComponent,
        data: {
          title: 'New category of device'
        }
      },
      {
        path: 'category-device/:id',
        component: UpdateCategoryDeviceComponent,
        data: {
          title: 'Update a category of device'
        }
      },
      {
        path: 'category-warna',
        component: ListCategoryWarnaComponent,
        data: {
          title: 'Category of Warna'
        }
      },
      {
        path: 'category-warna/new',
        component: NewCategoryWarnaComponent,
        data: {
          title: 'New category of warna'
        }
      },
      {
        path: 'category-warna/:id',
        component: UpdateCategoryWarnaComponent,
        data: {
          title: 'Update a category of warna'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRouting {
}
