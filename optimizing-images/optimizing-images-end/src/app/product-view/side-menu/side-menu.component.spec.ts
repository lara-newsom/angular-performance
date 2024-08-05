import { render } from '@testing-library/angular';
import { SideMenuComponent } from './side-menu.component';
import { provideRouter } from '@angular/router';

describe('SideMenuComponent', () => {
  async function setup() {
    const { fixture } = await render(SideMenuComponent, {
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
