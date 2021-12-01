class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Vazquez Rodriguez Veronica
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
