import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsideComponent } from './customside.component';

describe('CustomsideComponent', () => {
  let component: CustomsideComponent;
  let fixture: ComponentFixture<CustomsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
