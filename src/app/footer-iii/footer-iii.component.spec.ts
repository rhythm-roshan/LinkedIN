import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIiiComponent } from './footer-iii.component';

describe('FooterIiiComponent', () => {
  let component: FooterIiiComponent;
  let fixture: ComponentFixture<FooterIiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterIiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
