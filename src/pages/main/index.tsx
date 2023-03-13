import React from 'react';
import CardList from '../../components/card-list';
import Header from '../../components/header';
import SearchBar from '../../components/search-bar';
import { data } from '../../data';

interface MainPageInterface {
  value: string;
}

class MainPage extends React.Component<{}, MainPageInterface> {
  state = {
    value: '',
  };
  componentWillMount() {
    const valueData = localStorage.getItem('searchValue');
    const valueFromLS = valueData ? valueData : '';
    console.log(valueFromLS);
    this.setState({ value: valueFromLS });
  }

  handleValue = (v: string) => {
    this.setState({ value: v });
  };

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.value);
  }

  render() {
    console.log('render');
    return (
      <div className={'container'}>
        <Header />
        <SearchBar value={this.state.value} handleValue={this.handleValue} />
        <CardList list={data} />
      </div>
    );
  }
}

export default MainPage;
