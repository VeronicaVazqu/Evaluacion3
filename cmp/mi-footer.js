class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Edgar Ismael Rodriguez Gallegos
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
