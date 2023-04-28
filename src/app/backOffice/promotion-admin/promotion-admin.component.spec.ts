import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionAdminComponent } from './promotion-admin.component';

describe('PromotionAdminComponent', () => {
  let component: PromotionAdminComponent;
  let fixture: ComponentFixture<PromotionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
