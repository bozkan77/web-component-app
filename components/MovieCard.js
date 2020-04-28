const template = document.createElement("template");
template.innerHTML = `
    <h3>Film ismi</h3>
`;

class MovieCard extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector("h3").innerHTML = "Burak Özkan";
    }
}

window.customElements.define("movie-card", MovieCard);