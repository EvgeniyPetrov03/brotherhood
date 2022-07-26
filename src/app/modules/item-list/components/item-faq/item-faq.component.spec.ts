import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFaqComponent } from './item-faq.component';

describe('ItemFaqComponent', () => {
  let component: ItemFaqComponent;
  let fixture: ComponentFixture<ItemFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
