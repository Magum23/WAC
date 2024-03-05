import { newSpecPage } from '@stencil/core/testing';
import { MagumAmbulanceWlApp } from '../magum-ambulance-wl-app';

describe('magum-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [MagumAmbulanceWlApp],
      html: `<magum-ambulance-wl-app base-path="/"></magum-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('magum-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [MagumAmbulanceWlApp],
      html: `<magum-ambulance-wl-app base-path="/ambulance-wl/"></magum-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('magum-ambulance-wl-list');
  });
});
