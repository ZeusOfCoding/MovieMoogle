import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowDisplayComponent } from './tv-show-display.component';

describe('TvShowDisplayComponent', () => {
  let component: TvShowDisplayComponent;
  let fixture: ComponentFixture<TvShowDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
