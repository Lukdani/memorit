import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitGameComponent } from './submit-game.component';

describe('SubmitGameComponent', () => {
  let component: SubmitGameComponent;
  let fixture: ComponentFixture<SubmitGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
