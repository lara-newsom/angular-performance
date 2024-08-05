import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  async function setup() {
    const { fixture } = await render(AppComponent, {
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
