import React from 'react';
import CardList from '../../components/card-list';
import Header from '../../components/header';
import SearchBar from '../../components/search-bar';
import { data } from '../../data';

interface MainPageInterface {
  value: string;
}

class MainPage extends React.Component<Record<string, never>, MainPageInterface> {
  state = {
    value: '',
  };

  componentDidMount() {
    const valueData = localStorage.getItem('searchValue');
    const valueFromLS = valueData || '';
    this.setState({ value: valueFromLS });
  }

  componentWillUnmount() {
    const { value } = this.state;
    localStorage.setItem('searchValue', value);
  }

  handleValue = (v: string) => {
    this.setState({ value: v });
  };

  render() {
    const { value } = this.state;
    return (
      <div className='container'>
        <Header />
        <SearchBar value={value} handleValue={this.handleValue} />
        <CardList list={data} />
      </div>
    );
  }
}

export default MainPage;
