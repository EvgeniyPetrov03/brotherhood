import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-file-type',
  templateUrl: './item-file-type.component.html',
  styleUrls: ['./item-file-type.component.scss']
})
export class ItemFileTypeComponent {
  @Input() type!: string | null;
}

