import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementparchequeComponent } from './paiementparcheque.component';

describe('PaiementparchequeComponent', () => {
  let component: PaiementparchequeComponent;
  let fixture: ComponentFixture<PaiementparchequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementparchequeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementparchequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
