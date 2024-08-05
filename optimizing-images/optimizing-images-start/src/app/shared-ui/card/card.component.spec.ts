import { render } from '@testing-library/angular';
import { CardComponent } from './card.component';
import { provideRouter } from '@angular/router';
import { createProduct } from '../../models/data-mocks';

describe('CardComponent', () => {
  async function setup() {
    const { fixture } = await render(CardComponent, {
      providers: [
        provideRouter([]),
      ],
      componentInputs: {
        product: createProduct()
      }
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
