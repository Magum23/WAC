import { newE2EPage } from '@stencil/core/testing';

describe('magum-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<magum-ambulance-wl-app></magum-ambulance-wl-app>');

    const element = await page.find('magum-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
