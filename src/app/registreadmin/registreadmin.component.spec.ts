import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreadminComponent } from './registreadmin.component';

describe('RegistreadminComponent', () => {
  let component: RegistreadminComponent;
  let fixture: ComponentFixture<RegistreadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistreadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
