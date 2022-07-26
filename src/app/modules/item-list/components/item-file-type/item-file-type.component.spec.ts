import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFileTypeComponent } from './item-file-type.component';

describe('ItemFileTypeComponent', () => {
  let component: ItemFileTypeComponent;
  let fixture: ComponentFixture<ItemFileTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFileTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFileTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
