import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEntrarComponent } from './tela-entrar.component';

describe('TelaEntrarComponent', () => {
  let component: TelaEntrarComponent;
  let fixture: ComponentFixture<TelaEntrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaEntrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEntrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
