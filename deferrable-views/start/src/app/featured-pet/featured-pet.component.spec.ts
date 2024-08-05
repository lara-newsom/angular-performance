import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPetComponent } from './featured-pet.component';

describe('FeaturedPetComponent', () => {
  let component: FeaturedPetComponent;
  let fixture: ComponentFixture<FeaturedPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedPetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
