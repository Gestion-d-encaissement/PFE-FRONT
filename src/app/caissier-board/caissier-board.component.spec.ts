import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaissierBoardComponent } from './caissier-board.component';

describe('CaissierBoardComponent', () => {
  let component: CaissierBoardComponent;
  let fixture: ComponentFixture<CaissierBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaissierBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaissierBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
