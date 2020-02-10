const html = String.raw;

class PageActions extends HTMLElement {
  constructor() {
    super();

    this.state = {
      supportedActions: ['customise'],
      rendered: false
    };
  }

  connectedCallback() {
    if (this.state.rendered) {
      return;
    }

    this.render();
  }

  render() {
    this.innerHTML = html`
      ${this.state.supportedActions.includes('customise')
        ? html`
            <button
              type="button"
              class="bg-primary color-light border-primary text-500 font-base-heavy"
            >
              Customise
            </button>
          `
        : ''}
      ${this.state.supportedActions.includes('share')
        ? html`
            <button
              type="button"
              class="bg-transparent color-primary text-500 font-base-heavy"
            >
              Share
            </button>
          `
        : ''}
    `;
  }
}

if ('customElements' in window) {
  customElements.define('page-actions', PageActions);
}

export default PageActions;