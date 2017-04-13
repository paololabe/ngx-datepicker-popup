/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatePopupComponent } from './date-popup.component';

describe('DatePopupComponent', () => {
  let component: DatePopupComponent;
  let fixture: ComponentFixture<DatePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});