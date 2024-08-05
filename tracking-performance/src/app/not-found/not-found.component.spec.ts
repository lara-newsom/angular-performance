import { render } from '@testing-library/angular';
import { provideRouter } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  async function setup() {
    const { fixture } = await render(NotFoundComponent, {
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
