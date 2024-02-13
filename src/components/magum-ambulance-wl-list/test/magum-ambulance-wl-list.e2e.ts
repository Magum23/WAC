import { newE2EPage } from '@stencil/core/testing';

describe('magum-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<magum-ambulance-wl-list></magum-ambulance-wl-list>');

    const element = await page.find('magum-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
