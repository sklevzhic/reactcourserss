import './index.css';

import React, { ChangeEvent } from 'react';

interface SearchBarProps {
  value: string;
  handleValue: (v: string) => void;
}

class SearchBar extends React.Component<SearchBarProps> {
  handleValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.handleValue(e.target.value);
  };

  render() {
    return (
      <>
        <div className={'chat-input-wrapper'}>
          <div className={'chat-input-content'}>
            <input
              className={'chat-input-field'}
              placeholder={'Some text'}
              type="text"
              value={this.props.value}
              onChange={this.handleValueInput}
            />
            <button className={'chat-input-button button'}>Search</button>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
