import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVideosComponent } from './top-videos.component';

describe('TopVideosComponent', () => {
  let component: TopVideosComponent;
  let fixture: ComponentFixture<TopVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
