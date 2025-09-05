import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmergencyleavePage } from './emergencyleave.page';

describe('EmergencyleavePage', () => {
  let component: EmergencyleavePage;
  let fixture: ComponentFixture<EmergencyleavePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyleavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
