import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrinkerAppComponent } from './shrinker-app.component';

describe('ShrinkerAppComponent', () => {
  let component: ShrinkerAppComponent;
  let fixture: ComponentFixture<ShrinkerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrinkerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrinkerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
