import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteSoftwareComponent } from './teste-software.component';

describe('TesteSoftwareComponent', () => {
  let component: TesteSoftwareComponent;
  let fixture: ComponentFixture<TesteSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
