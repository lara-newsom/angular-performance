import { render } from '@testing-library/angular';

import { DetailViewComponent } from './detail-view.component';

describe('DetailViewComponent', () => {
  async function setup() {
    const { fixture } = await render(DetailViewComponent, {
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
