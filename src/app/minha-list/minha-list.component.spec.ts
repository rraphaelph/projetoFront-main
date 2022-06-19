import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaListComponent } from './minha-list.component';

describe('MinhaListComponent', () => {
  let component: MinhaListComponent;
  let fixture: ComponentFixture<MinhaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
