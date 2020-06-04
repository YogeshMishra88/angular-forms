import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfformsComponent } from './tdfforms.component';

describe('TdfformsComponent', () => {
  let component: TdfformsComponent;
  let fixture: ComponentFixture<TdfformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
