import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsComponent } from 'src/app/modules/stars/stars.component';

describe('StarsComponent', () => {
  let component: StarsComponent;
  let fixture: ComponentFixture<StarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
