import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceManagmentComponent } from './agence-managment.component';

describe('AgenceManagmentComponent', () => {
  let component: AgenceManagmentComponent;
  let fixture: ComponentFixture<AgenceManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenceManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
