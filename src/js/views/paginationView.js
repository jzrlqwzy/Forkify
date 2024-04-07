import View from './View.js';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  _generateMarkup() {
    // Page 1, there are other page
    // Page 2, there are NO other page
    // Last Page
    // Middle page
  }
}

export default new PaginationView();
