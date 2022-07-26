import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  constructor(
    private router: Router
  ) {
  }


  openModInfo(itemId: number): void {
    this.router.navigate(['mods/details'], { queryParams: { id: 2 } });
  }
}
