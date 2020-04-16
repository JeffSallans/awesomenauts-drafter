import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NautPickerComponent } from './naut-picker.component';

describe('NautPickerComponent', () => {
  let component: NautPickerComponent;
  let fixture: ComponentFixture<NautPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NautPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NautPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
