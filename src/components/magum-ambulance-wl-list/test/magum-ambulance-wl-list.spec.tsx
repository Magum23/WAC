import { newSpecPage } from '@stencil/core/testing';
import { MagumAmbulanceWlList } from '../magum-ambulance-wl-list';

describe('magum-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MagumAmbulanceWlList],
      html: `<magum-ambulance-wl-list></magum-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as MagumAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);

    expect(items.length).toEqual(expectedPatients);
  });
});
