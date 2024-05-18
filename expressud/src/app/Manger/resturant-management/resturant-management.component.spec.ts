import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantManagementComponent } from './resturant-management.component';

describe('ResturantManagementComponent', () => {
  let component: ResturantManagementComponent;
  let fixture: ComponentFixture<ResturantManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResturantManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResturantManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
