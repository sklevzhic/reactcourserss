import React from 'react';
import SearchBar from '../../components/search-bar';

class MainPage extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <SearchBar />
      </div>
    );
  }
}

export default MainPage;
