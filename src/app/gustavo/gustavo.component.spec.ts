import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GustavoComponent } from './gustavo.component';

describe('GustavoComponent', () => {
  let component: GustavoComponent;
  let fixture: ComponentFixture<GustavoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GustavoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GustavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
