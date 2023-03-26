import Form from '../../components/form';
import React from 'react';
import Header from '../../components/header';
import { IPhoto } from '../../models/IPhoto';
import CardList from '../../components/card-list';

interface FormsPageState {
  images: IPhoto[];
}
class FormPage extends React.Component<Record<string, never>, FormsPageState> {
  state: FormsPageState = {
    images: [],
  };

  onSubmit = (formData: IPhoto) => {
    this.setState({ images: [...this.state.images, formData] });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <Form handleSubmitForm={this.onSubmit} />
          <CardList list={this.state.images} />
        </div>
      </div>
    );
  }
}

export default FormPage;
