import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSolutionComponent } from './send-solution.component';

describe('SendSolutionComponent', () => {
  let component: SendSolutionComponent;
  let fixture: ComponentFixture<SendSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
