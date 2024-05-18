import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBtnComponent } from './view-btn.component';

describe('ViewBtnComponent', () => {
  let component: ViewBtnComponent;
  let fixture: ComponentFixture<ViewBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
