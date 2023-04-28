import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionUserComponent } from './promotion-user.component';

describe('PromotionUserComponent', () => {
  let component: PromotionUserComponent;
  let fixture: ComponentFixture<PromotionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
