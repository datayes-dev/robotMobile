import React from 'react';

export default class SearchData extends React.Component {
					 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.show ? "" : "mui-hidden"}>数据</div>
    );
  }
}
