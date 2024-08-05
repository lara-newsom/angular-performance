import { render } from '@testing-library/angular';
import { CartComponent } from './cart.component';
import { provideRouter } from '@angular/router';

describe('CartComponent', () => {
  async function setup() {
    const { fixture } = await render(CartComponent, {
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
