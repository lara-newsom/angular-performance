import { render } from '@testing-library/angular';
import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  async function setup() {
    const { fixture } = await render(HeroSectionComponent, {
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
