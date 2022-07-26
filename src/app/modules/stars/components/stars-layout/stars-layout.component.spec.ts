import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsLayoutComponent } from './stars-layout.component';

describe('StarsLayoutComponent', () => {
  let component: StarsLayoutComponent;
  let fixture: ComponentFixture<StarsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
