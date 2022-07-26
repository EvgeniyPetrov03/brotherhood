import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDescritionComponent } from './item-descrition.component';

describe('ItemDescritionComponent', () => {
  let component: ItemDescritionComponent;
  let fixture: ComponentFixture<ItemDescritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDescritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDescritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
