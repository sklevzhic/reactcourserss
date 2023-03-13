import React from 'react';
import { IPhoto } from '../../models/IPhoto';
import './index.css';

interface CardItemProps {
  item: IPhoto;
}

class CardItem extends React.Component<CardItemProps, {}> {
  render() {
    return (
      <div className="card">
        <div className="card__top">
          <a href="#" className="card__image">
            <img src={this.props.item.thumbnailUrl} alt={this.props.item.title} />
          </a>
          <div className="card__label">-10%</div>
        </div>
        <div className="card__bottom">
          <div className="card__prices">
            <div className="card__price card__price--discount">135 000</div>
            <div className="card__price card__price--common">150 000</div>
          </div>
          <a href="#" className="card__title">
            {this.props.item.title}
          </a>
          <button className="card__add">В корзину</button>
        </div>
      </div>
    );
  }
}

export default CardItem;
