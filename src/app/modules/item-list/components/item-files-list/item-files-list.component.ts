import { Component } from '@angular/core';

@Component({
  selector: 'app-item-files-list',
  templateUrl: './item-files-list.component.html',
  styleUrls: ['./item-files-list.component.scss']
})
export class ItemFilesListComponent {
  displayedColumns: string[] = ['type', 'name', 'size', 'uploaded', 'version', 'downloads', 'actions'];
  dataSource = [
    { type: 'alpha', name: 'jei_1.8-2.14.0.139.jar', size: '230.14 KB', uploaded: 'Jan 5, 2016', version: '1.8', downloads: '166,262' },
    { type: 'betta', name: 'jei_1.8-2.14.0.139.jar', size: '230.14 KB', uploaded: 'Jan 5, 2016', version: '1.8', downloads: '166,262' },
    { type: 'release', name: 'jei_1.8-2.14.0.139.jar', size: '230.14 KB', uploaded: 'Jan 5, 2016', version: '1.8', downloads: '166,262' },
  ];
}
