import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTvShowComponent } from './top-tv-show.component';

describe('TopTvShowComponent', () => {
  let component: TopTvShowComponent;
  let fixture: ComponentFixture<TopTvShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTvShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
