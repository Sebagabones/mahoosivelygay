class Footer extends HTMLElement {
  constructor() {
    super();
  }
}
connectedCallback() {
  this.innerHTML = `
<footer>
        <a href="/"> Main Page </a>
    </footer>
`
}
customElements.define('footer-component', Footer);
