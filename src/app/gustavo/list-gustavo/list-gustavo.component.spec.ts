import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGustavoComponent } from './list-gustavo.component';

describe('ListGustavoComponent', () => {
  let component: ListGustavoComponent;
  let fixture: ComponentFixture<ListGustavoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGustavoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGustavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
