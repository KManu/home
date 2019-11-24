import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuralEnhanceComponent } from './neural-enhance.component';

describe('NeuralEnhanceComponent', () => {
  let component: NeuralEnhanceComponent;
  let fixture: ComponentFixture<NeuralEnhanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuralEnhanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuralEnhanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
