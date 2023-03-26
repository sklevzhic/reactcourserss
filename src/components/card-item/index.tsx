import React from 'react';
import { IPhoto } from '../../models/IPhoto';
import './index.css';

export interface CardItemProps {
  item: IPhoto;
}

class CardItem extends React.Component<CardItemProps> {
  render() {
    const { item } = this.props;
    return (
      <div className="card" data-testid="card-item">
        <div className="card__top">
          <p className="card__image">
            <img src={item.thumbnailUrl} alt={item.title} />
          </p>
        </div>
        <div className="card__bottom">
          <div className="card__prices">
            <div className="card__price card__price--discount">Views: {item.views}</div>
            <div className="card__price card__price--common">Likes: {item.likes}</div>
          </div>
          <p className="card__title">{item.title}</p>

          <button type="button" className="card__add">
            В корзину
          </button>
        </div>
      </div>
    );
  }
}

export default CardItem;
