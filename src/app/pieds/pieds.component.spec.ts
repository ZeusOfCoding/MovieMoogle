import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedsComponent } from './pieds.component';

describe('PiedsComponent', () => {
  let component: PiedsComponent;
  let fixture: ComponentFixture<PiedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
