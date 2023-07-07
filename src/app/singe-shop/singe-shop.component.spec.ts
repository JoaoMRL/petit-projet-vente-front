import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingeShopComponent } from './singe-shop.component';

describe('SingeShopComponent', () => {
  let component: SingeShopComponent;
  let fixture: ComponentFixture<SingeShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingeShopComponent]
    });
    fixture = TestBed.createComponent(SingeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
