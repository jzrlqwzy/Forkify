import View from './View.js';
import previewView from './previewView.js';

class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _windowEl = document.querySelector('.add-recipe-window');
  _overlayEl = document.querySelector('.overlay');

  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  toggleWindow() {
    this._windowEl.classList.toggle('hidden');
    this._overlayEl.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlayEl.addEventListener('click', this.toggleWindow.bind(this));
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
