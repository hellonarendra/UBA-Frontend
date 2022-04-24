import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageProblemComponent } from './village-problem.component';

describe('VillageProblemComponent', () => {
  let component: VillageProblemComponent;
  let fixture: ComponentFixture<VillageProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
