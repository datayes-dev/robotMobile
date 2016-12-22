import React from 'react';
import { hashHistory } from 'react-router';
import './title.less';

/**
  一个简单的支持返回和标题文字的标题bar 
**/
export default class SimpleTitleBar extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {

      title: this.props.title,//标题
      backEanble : this.props.backEanble == 'true'//返回按钮开关
    };  
  }

  onGoBackClicked(event) {

    hashHistory.goBack();
  }

  render() {
    return (
      <header className="title-bar mui-bar">
        {
          this.state.backEanble &&
          <a className="title-icon mui-icon mui-icon-arrowleft mui-pull-left" onClick={this.onGoBackClicked}></a>
        }
    		<h1 className="mui-title">{this.state.title}</h1>
	    </header>
    );
  }
}
