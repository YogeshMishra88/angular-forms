import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformswithfbComponent } from './reformswithfb.component';

describe('ReformswithfbComponent', () => {
  let component: ReformswithfbComponent;
  let fixture: ComponentFixture<ReformswithfbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReformswithfbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReformswithfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
