import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NautComponent } from './naut.component';

describe('NautComponent', () => {
  let component: NautComponent;
  let fixture: ComponentFixture<NautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
