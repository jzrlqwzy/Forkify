class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(subscriber) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      subscriber();
    });
  }
}

export default new SearchView();
