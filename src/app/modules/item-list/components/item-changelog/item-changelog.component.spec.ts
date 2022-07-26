import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChangelogComponent } from './item-changelog.component';

describe('ItemChangelogComponent', () => {
  let component: ItemChangelogComponent;
  let fixture: ComponentFixture<ItemChangelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemChangelogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
