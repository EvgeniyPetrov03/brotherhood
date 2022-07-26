import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarsComponent } from 'src/app/modules/stars/stars.component';
import { StarsLayoutComponent } from './components/stars-layout/stars-layout.component';


@NgModule({
  declarations: [
    StarsLayoutComponent,
    StarsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarsComponent
  ]
})
export class StarsModule {
}
