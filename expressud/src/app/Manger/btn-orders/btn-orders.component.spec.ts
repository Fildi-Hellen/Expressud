import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOrdersComponent } from './btn-orders.component';

describe('BtnOrdersComponent', () => {
  let component: BtnOrdersComponent;
  let fixture: ComponentFixture<BtnOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
