import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteSoftware3Component } from './teste-software3.component';

describe('TesteSoftware3Component', () => {
  let component: TesteSoftware3Component;
  let fixture: ComponentFixture<TesteSoftware3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteSoftware3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteSoftware3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
