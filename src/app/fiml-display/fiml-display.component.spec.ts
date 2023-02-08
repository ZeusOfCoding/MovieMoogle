import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FimlDisplayComponent } from './fiml-display.component';

describe('FimlDisplayComponent', () => {
  let component: FimlDisplayComponent;
  let fixture: ComponentFixture<FimlDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FimlDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FimlDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
