import { render } from '@testing-library/angular';
import { ProductViewComponent } from './product-view.component';
import { provideRouter } from '@angular/router';

describe('ProductViewComponent', () => {
  async function setup() {
    const { fixture } = await render(ProductViewComponent, {
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
