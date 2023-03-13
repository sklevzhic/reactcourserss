import './index.css';

import React from 'react';

interface SearchBarProps {}

interface SearchBarState {}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state = {};
  render() {
    return (
      <>
        <div className={'chat-input-wrapper'}>
          <div className={'chat-input-content'}>
            <input
              className={'chat-input-field'}
              placeholder={'Some text'}
              type="text"
              value={''}
              onChange={() => {}}
            />
            <button className={'chat-input-button button'}>Search</button>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
