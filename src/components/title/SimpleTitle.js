import React from 'react';
import './title.less';

export default class SimpleTitle extends React.Component {
 
  constructor(props) {
    super(props);

    this.title = this.props.title;
    //this.left
  }

  render() {
    return (
      <header className="title-bar mui-bar">
        <a className="title-icon mui-icon mui-icon-arrowleft mui-pull-left"/>
    		<h1 className="mui-title">{this.title}</h1>
	    </header>
    );
  }
}
