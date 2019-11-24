import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuralCompressorComponent } from './neural-compressor.component';

describe('NeuralCompressorComponent', () => {
  let component: NeuralCompressorComponent;
  let fixture: ComponentFixture<NeuralCompressorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuralCompressorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuralCompressorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
