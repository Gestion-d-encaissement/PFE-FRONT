import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincaissierComponent } from './logincaissier.component';

describe('LogincaissierComponent', () => {
  let component: LogincaissierComponent;
  let fixture: ComponentFixture<LogincaissierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincaissierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogincaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
