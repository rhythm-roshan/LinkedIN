import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIComponent } from './footer-i.component';

describe('FooterIComponent', () => {
  let component: FooterIComponent;
  let fixture: ComponentFixture<FooterIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
