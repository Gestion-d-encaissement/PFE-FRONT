import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementparespeceComponent } from './paiementparespece.component';

describe('PaiementparespeceComponent', () => {
  let component: PaiementparespeceComponent;
  let fixture: ComponentFixture<PaiementparespeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementparespeceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementparespeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
