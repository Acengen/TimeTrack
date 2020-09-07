import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTimetrackComponent } from './main-timetrack.component';

describe('MainTimetrackComponent', () => {
  let component: MainTimetrackComponent;
  let fixture: ComponentFixture<MainTimetrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTimetrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTimetrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
