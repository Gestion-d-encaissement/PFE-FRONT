import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementparcarteComponent } from './paiementparcarte.component';

describe('PaiementparcarteComponent', () => {
  let component: PaiementparcarteComponent;
  let fixture: ComponentFixture<PaiementparcarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementparcarteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementparcarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
