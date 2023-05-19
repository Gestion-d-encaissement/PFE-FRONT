import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderoComponent } from './bordero.component';

describe('BorderoComponent', () => {
  let component: BorderoComponent;
  let fixture: ComponentFixture<BorderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
