import { render } from '@testing-library/angular';
import { SubHeroLogoComponent } from './sub-hero-logo.component';

describe('SubHeroLogoComponent', () => {
  async function setup() {
    const { fixture } = await render(SubHeroLogoComponent, {
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
