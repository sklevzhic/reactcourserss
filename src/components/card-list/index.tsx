import React from 'react';
import { IPhoto } from '../../models/IPhoto';
import CardItem from '../card-item';
import './index.css';

export interface CardListProps {
  list: IPhoto[];
}

class CardList extends React.Component<CardListProps> {
  render() {
    const { list } = this.props;
    const listElements = list.map((el) => {
      return <CardItem item={el} key={el.id} />;
    });
    return <div className="cards">{list.length ? listElements : <>Empty</>}</div>;
  }
}

export default CardList;
