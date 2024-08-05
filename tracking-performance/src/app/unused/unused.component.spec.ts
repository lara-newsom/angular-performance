import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnusedComponent } from './unused.component';
import { UnusedModule } from './unused.module';

describe('UnusedComponent', () => {
  let component: UnusedComponent;
  let fixture: ComponentFixture<UnusedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnusedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
