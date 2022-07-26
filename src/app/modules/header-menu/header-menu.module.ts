import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';


@NgModule({
  declarations: [
    HeaderMenuComponent
  ],
  exports: [
    HeaderMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HeaderMenuModule {
}
