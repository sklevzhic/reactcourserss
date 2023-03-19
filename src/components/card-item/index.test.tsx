import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import CardItem from './index';
import { IPhoto } from '../../models/IPhoto';

describe('card-item', () => {
  it('should render the card', () => {
    const item: IPhoto = {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
      views: 75,
      likes: 5,
      comments: 5,
    };

    const wrapper = render(<CardItem item={item} />);
    expect(
      wrapper.getByText('accusamus beatae ad facilis cum similique qui sunt'),
    ).toBeInTheDocument();
    expect(wrapper.getByText('Views: 75')).toBeInTheDocument();
    expect(wrapper.getByText('Likes: 5')).toBeInTheDocument();
  });
});
