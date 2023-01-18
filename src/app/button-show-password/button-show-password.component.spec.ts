import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShowPasswordComponent } from './button-show-password.component';

describe('ButtonShowPasswordComponent', () => {
  let component: ButtonShowPasswordComponent;
  let fixture: ComponentFixture<ButtonShowPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonShowPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonShowPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
