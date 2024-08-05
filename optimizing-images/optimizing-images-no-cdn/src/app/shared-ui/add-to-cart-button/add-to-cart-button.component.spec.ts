import { render } from '@testing-library/angular';
import { AddToCartButtonComponent } from './add-to-cart-button.component';

describe('AddToCartButtonComponent', () => {
  async function setup() {
    const { fixture } = await render(AddToCartButtonComponent, {
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
