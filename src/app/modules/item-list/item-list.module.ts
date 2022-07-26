import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SwiperModule } from 'swiper/angular';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemDescritionComponent } from './components/item-descrition/item-descrition.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemFaqComponent } from './components/item-faq/item-faq.component';
import { ItemFilesComponent } from './components/item-files/item-files.component';
import { ItemImagesComponent } from './components/item-images/item-images.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemSidebarComponent } from './components/item-sidebar/item-sidebar.component';
import { AdditionalInfoModalComponent } from './modals/additional-info-modal/additional-info-modal.component';
import { ItemFilesListComponent } from './components/item-files-list/item-files-list.component';
import { ItemMainFileComponent } from './components/item-main-file/item-main-file.component';
import { ItemChangelogComponent } from './components/item-changelog/item-changelog.component';
import { ItemFileTypeComponent } from './components/item-file-type/item-file-type.component';


@NgModule({
  declarations: [
    ItemListComponent,
    ItemCardComponent,
    AdditionalInfoModalComponent,
    ItemInfoComponent,
    ItemSidebarComponent,
    ItemDescritionComponent,
    ItemFilesComponent,
    ItemImagesComponent,
    ItemFaqComponent,
    ItemDetailsComponent,
    ItemFilesListComponent,
    ItemMainFileComponent,
    ItemChangelogComponent,
    ItemFileTypeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    SwiperModule,
    MatTableModule,
    MatExpansionModule
  ]
})
export class ItemListModule {
}
