import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlychartComponent } from './plotlychart.component';

describe('PlotlychartComponent', () => {
  let component: PlotlychartComponent;
  let fixture: ComponentFixture<PlotlychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotlychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
