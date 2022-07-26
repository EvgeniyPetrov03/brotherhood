import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from 'src/app/modules/item-list/components/item-details/item-details.component';
import { ItemInfoComponent } from 'src/app/modules/item-list/components/item-info/item-info.component';
import { ItemListComponent } from 'src/app/modules/item-list/components/item-list/item-list.component';
import { StarsComponent } from 'src/app/modules/stars/stars.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'stars',
        component: StarsComponent
      },
      {
        path: 'mods',
        component: ItemListComponent
      },
      {
        path: 'mods/details',
        component: ItemDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
