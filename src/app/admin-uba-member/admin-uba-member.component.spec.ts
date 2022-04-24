import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUbaMemberComponent } from './admin-uba-member.component';

describe('AdminUbaMemberComponent', () => {
  let component: AdminUbaMemberComponent;
  let fixture: ComponentFixture<AdminUbaMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUbaMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUbaMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
