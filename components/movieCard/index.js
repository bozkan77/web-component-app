const movieCardTemplate = document.createElement('template');

movieCardTemplate.innerHTML = `
<style>
import url('http://${location.host}/components/movieCard/style.css')
</style>

<div class="movie-container">
      <div class="image-container">
        <img />
      </div>
      <div class="info">
        <p></p>
        <div class="action_container">
          <i class="isFavourite fa fa-heart"></i>
          <a target="_blank" class="button">IMDb</a>
        </div>
      </div>
    </div>
`;

class MovieCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(movieCardTemplate.content.cloneNode(true));
  }
}

window.customElements.define('movie-card', MovieCard);
