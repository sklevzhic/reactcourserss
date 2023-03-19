import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import CardList, { CardListProps } from './index';
import { data } from '../../data';

describe('card-item', () => {
  const props: CardListProps = {
    list: data,
  };

  it('should render the list', () => {
    const wrapper = render(<CardList {...props} />);
    const listItems = wrapper.getAllByTestId('card-item');
    expect(listItems).toHaveLength(4);
  });

  it('should not to be empty', () => {
    const wrapper = render(<CardList {...props} />);
    expect(wrapper.queryByText('Empty')).toBeNull();
  });

  it('should render emptyBox', () => {
    const wrapper = render(<CardList list={[]} />);
    expect(wrapper.getByText('Empty')).toBeInTheDocument();
  });
});
