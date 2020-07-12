import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteSoftware2Component } from './teste-software2.component';

describe('TesteSoftware2Component', () => {
  let component: TesteSoftware2Component;
  let fixture: ComponentFixture<TesteSoftware2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteSoftware2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteSoftware2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
