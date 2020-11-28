import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeShopComponent } from './recipe-shop.component';

describe('RecipeShopComponent', () => {
  let component: RecipeShopComponent;
  let fixture: ComponentFixture<RecipeShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
