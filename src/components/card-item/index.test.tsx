import CardItem from './index';
import { render } from '@testing-library/react';
import React from 'react';

test('loads and displays card item', () => {
  const obj = {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  };

  const { getByText } = render(<CardItem item={obj} />);
  expect(getByText(/accusamus beatae ad facilis cum similique qui sunt/i)).toBeInTheDocument();
});
