class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.violet.min.css">
    <link href="styles.css" rel="stylesheet">
    <header>
        <nav>
            <ul id="theme-picker">
                <li><a href="#" data-theme-switcher="light">Light</a></li>
                <li><a href="#" data-theme-switcher="dark">Dark</a></li>
            </ul>

        </nav>

    </header>

`
    }
}
customElements.define('header-component', Header);
