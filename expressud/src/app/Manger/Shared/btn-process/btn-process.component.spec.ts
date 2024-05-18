import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnProcessComponent } from './btn-process.component';

describe('BtnProcessComponent', () => {
  let component: BtnProcessComponent;
  let fixture: ComponentFixture<BtnProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
