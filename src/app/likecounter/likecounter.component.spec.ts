import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikecounterComponent } from './likecounter.component';

describe('LikecounterComponent', () => {
  let component: LikecounterComponent;
  let fixture: ComponentFixture<LikecounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikecounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikecounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
