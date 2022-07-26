import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFilesListComponent } from './item-files-list.component';

describe('ItemFilesListComponent', () => {
  let component: ItemFilesListComponent;
  let fixture: ComponentFixture<ItemFilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFilesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
