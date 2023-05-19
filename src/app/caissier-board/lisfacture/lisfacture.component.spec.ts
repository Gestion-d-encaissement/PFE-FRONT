import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisfactureComponent } from './lisfacture.component';

describe('LisfactureComponent', () => {
  let component: LisfactureComponent;
  let fixture: ComponentFixture<LisfactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisfactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
