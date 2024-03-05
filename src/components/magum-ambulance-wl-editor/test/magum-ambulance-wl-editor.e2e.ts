import { newE2EPage } from '@stencil/core/testing';

describe('magum-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<magum-ambulance-wl-editor></magum-ambulance-wl-editor>');

    const element = await page.find('magum-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
