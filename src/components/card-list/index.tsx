import React from 'react';
import { IPhoto } from '../../models/IPhoto';
import CardItem from '../card-item';
import './index.css';
interface CardListProps {
  list: IPhoto[];
}

class CardList extends React.Component<CardListProps, {}> {
  render() {
    return (
      <div className={'cards'}>
        {this.props.list.map((el) => {
          return <CardItem item={el} key={el.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
