import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnusedStandaloneComponent } from './unused-standalone.component';

describe('UnusedStandaloneComponent', () => {
  let component: UnusedStandaloneComponent;
  let fixture: ComponentFixture<UnusedStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnusedStandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnusedStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
