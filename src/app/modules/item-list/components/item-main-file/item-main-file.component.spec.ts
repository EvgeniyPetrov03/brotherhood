import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMainFileComponent } from './item-main-file.component';

describe('ItemMainFileComponent', () => {
  let component: ItemMainFileComponent;
  let fixture: ComponentFixture<ItemMainFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMainFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMainFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
