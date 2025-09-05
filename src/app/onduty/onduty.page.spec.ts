import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OndutyPage } from './onduty.page';

describe('OndutyPage', () => {
  let component: OndutyPage;
  let fixture: ComponentFixture<OndutyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OndutyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
