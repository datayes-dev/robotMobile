import React from 'react';
import SearchComponent from '../search/search.component';

//主组件
export default class MainComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SearchComponent/>
    );
  }
}
