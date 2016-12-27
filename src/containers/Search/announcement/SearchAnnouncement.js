import React from 'react';

export default class SearchAnnouncement extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.show ? "" : "mui-hidden"}>公告</div>
    );
  }
}
