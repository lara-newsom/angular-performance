import { render } from '@testing-library/angular';
import { SubSectionComponent } from './sub-section.component';
import { provideRouter } from '@angular/router';

describe('SubSectionComponent', () => {
  async function setup() {
    const { fixture } = await render(SubSectionComponent, {
      providers: [
        provideRouter([]),
      ],
    })
    return {
      fixture,
    };
  }

  it('should create', async() => {
    const { fixture } = await setup();

    expect(fixture).toBeTruthy();
  });
});
