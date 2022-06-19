import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecentComponent } from './add-recent.component';

describe('AddRecentComponent', () => {
  let component: AddRecentComponent;
  let fixture: ComponentFixture<AddRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
