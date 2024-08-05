import { render } from '@testing-library/angular';
import { TwoPanelLayoutComponent } from './two-panel-layout.component';

describe('TwoPanelLayoutComponent', () => {
  async function setup() {
    const { fixture } = await render(TwoPanelLayoutComponent, {
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
