/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GmcComponent } from './gmc.component';

describe('GmcComponent', () => {
  let component: GmcComponent;
  let fixture: ComponentFixture<GmcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
