import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizerComponent } from './capitalizer.component';

describe('CapitalizerComponent', () => {
  let component: CapitalizerComponent;
  let fixture: ComponentFixture<CapitalizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
