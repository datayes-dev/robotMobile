import React from 'react';

/**
一个简单的输入框 标题Bar
onInputBarEntered 回调
placeholder 默认文字显示
iconClass icon显示
**/
export default class InputTitleBar extends React.Component {

  constructor(props) {
    super(props);
    //mui-icon-arrowleft
    this.state = {
    	iconClass: this.props.iconClass,
    	placeholder: this.props.placeholder
    }

    this.onInputKeyUp = this.onInputKeyUp.bind(this);
  }

  onInputKeyUp(event) {

  	//如果是回车键，并且字符串不为空
  	if (event != null && event.keyCode == 13 && this.props.onInputBarEntered) {

  		let value = event.target.value;

  		if (value.length > 0) {

  			this.props.onInputBarEntered(value);
  		}
  	}
  }

  render() {
    return (
    	<header className="title-bar mui-bar">
    		<div className="input-bar">
    			<p className={'title-icon mui-icon ' + this.state.iconClass + ' mui-pull-left'}></p>
          		<input className="input" onKeyUp={this.onInputKeyUp} type="text" placeholder={this.state.placeholder}></input>
    		</div>
		</header>
    );
  }
}
