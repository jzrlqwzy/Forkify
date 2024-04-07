import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(subscriber) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      // `+` convert string to number
      const goToPage = +btn.dataset.goto;
      subscriber(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    // Page 1, there are other page
    if (curPage === 1 && numPages > 1) return this._generateMarkupNext(curPage);
    // Last Page
    if (curPage === numPages && numPages > 1)
      return this._generateMarkupPrev(curPage);
    // Middle page
    if (curPage < numPages)
      return `${this._generateMarkupPrev(curPage)} ${this._generateMarkupNext(
        curPage
      )}`;
    // Page 1, there are NO other page
    return '';
  }

  _generateMarkupNext(curPage) {
    return `
    <button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `;
  }

  _generateMarkupPrev(curPage) {
    return `
    <button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
    `;
  }
}

export default new PaginationView();
