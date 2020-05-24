import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NautPacksComponent } from './naut-packs.component';

describe('NautPacksComponent', () => {
  let component: NautPacksComponent;
  let fixture: ComponentFixture<NautPacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NautPacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NautPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
