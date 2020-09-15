import FilmCardView from "../view/film-card.js";
import PopupView from "../view/popup.js";
import {render, RenderPosition, remove} from "../utils/render.js";

export default class FilmCard {
  constructor(container, footerContainer, changeData) {
    this._container = container;
    this._footerContainer = footerContainer;
    this._changeData = changeData;

    this._filmCardComponent = null;
    this._popupElement = null;
  }

  init(filmData) {
    this._filmData = filmData;

    const prevCardComponent = this._filmCardComponent;

    this._filmCardComponent = new FilmCardView(filmData);

    if (prevCardComponent === null) {
      render(this._container, this._filmCardComponent, RenderPosition.BEFOREEND);
      this._filmCardComponent.setClickCallHandler(() => {
        this._renderPopup(filmData);
      });
      return;
    }
  }

  _renderPopup(filmData) {
    this._popupElement = new PopupView(filmData);
    render(this._footerContainer, this._popupElement, RenderPosition.AFTEREND);
    this._popupComponent = document.querySelector(`.film-details`);
    const closePopupComponent = () => {
      this._popupComponent.remove();
    };
    this._popupElement.setClosePopupHandler(() => {
      closePopupComponent();
    });
  }

  destroy() {
    remove(this._filmCardComponent);
    remove(this._popupComponent);
  }

}
