import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginemployerComponent } from './loginemployer.component';

describe('LoginemployerComponent', () => {
  let component: LoginemployerComponent;
  let fixture: ComponentFixture<LoginemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginemployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
