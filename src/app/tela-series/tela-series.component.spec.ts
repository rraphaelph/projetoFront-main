import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSeriesComponent } from './tela-series.component';

describe('TelaSeriesComponent', () => {
  let component: TelaSeriesComponent;
  let fixture: ComponentFixture<TelaSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
