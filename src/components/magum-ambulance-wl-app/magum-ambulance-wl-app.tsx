import { Component, Host, Prop, State, h } from '@stencil/core';
declare global {
  interface Window {
    navigation: any;
  }
}

@Component({
  tag: 'magum-ambulance-wl-app',
  styleUrl: 'magum-ambulance-wl-app.css',
  shadow: true,
})
export class MagumAmbulanceWlApp {
  @State() private relativePath = '';

  @Prop() basePath: string = '';

  componentWillLoad() {
    const baseUri = new URL(this.basePath, document.baseURI || '/').pathname;

    const toRelative = (path: string) => {
      if (path.startsWith(baseUri)) {
        this.relativePath = path.slice(baseUri.length);
      } else {
        this.relativePath = '';
      }
    };

    window.navigation?.addEventListener('navigate', (ev: Event) => {
      if ((ev as any).canIntercept) {
        (ev as any).intercept();
      }
      let path = new URL((ev as any).destination.url).pathname;
      toRelative(path);
    });

    toRelative(location.pathname);
  }

  render() {
    let element = 'list';
    let entryId = '@new';

    if (this.relativePath.startsWith('entry/')) {
      element = 'editor';
      entryId = this.relativePath.split('/')[1];
    }

    const navigate = (path: string) => {
      const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
      window.navigation.navigate(absolute);
    };

    return (
      <Host>
        {element === 'editor' ? (
          <magum-ambulance-wl-editor entry-id={entryId} oneditor-closed={() => navigate('./list')}></magum-ambulance-wl-editor>
        ) : (
          <magum-ambulance-wl-list onentry-clicked={(ev: CustomEvent<string>) => navigate('./entry/' + ev.detail)}></magum-ambulance-wl-list>
        )}
      </Host>
    );
  }
}
