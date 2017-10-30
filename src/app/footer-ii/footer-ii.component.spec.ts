import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIiComponent } from './footer-ii.component';

describe('FooterIiComponent', () => {
  let component: FooterIiComponent;
  let fixture: ComponentFixture<FooterIiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterIiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
