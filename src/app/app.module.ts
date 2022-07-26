import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderMenuModule } from 'src/app/modules/header-menu/header-menu.module';
import { ItemListModule } from 'src/app/modules/item-list/item-list.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeaderMenuModule,
    ItemListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
