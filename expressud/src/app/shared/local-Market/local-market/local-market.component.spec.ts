import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalMarketComponent } from './local-market.component';

describe('LocalMarketComponent', () => {
  let component: LocalMarketComponent;
  let fixture: ComponentFixture<LocalMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalMarketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
