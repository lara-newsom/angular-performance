import { render } from '@testing-library/angular';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  async function setup() {
    const { fixture } = await render(ContactComponent, {
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
