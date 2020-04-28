const template = document.createElement('template');
template.innerHTML = `
<style>
img {
  max-width: 7rem;
  max-height: 7rem;
  border-radius: 50%;
}
</style>
    <h3>Film ismi</h3>
    <img/>
    <p>
    <slot/>
    </p>
`;

class MovieCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('title');
    this.shadowRoot.querySelector('img').src = this.getAttribute('poster');

    // attribute bilgilerinin okunması
  }
}

window.customElements.define('movie-card', MovieCard);
