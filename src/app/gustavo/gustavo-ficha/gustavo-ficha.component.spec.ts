import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GustavoFichaComponent } from './gustavo-ficha.component';

describe('GustavoFichaComponent', () => {
  let component: GustavoFichaComponent;
  let fixture: ComponentFixture<GustavoFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GustavoFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GustavoFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
