import React from 'react';
import './tab.less';

/**
一个简单的tabBar
startIndex 开始位置
tabs 需要显示的tabs ["aa", "bb", "cc"]
onTabClicked(index, tab) 点击的回调
**/
export default class SimpleTabBar extends React.Component {
  
  constructor(props) {
    super(props);

	this.state= {
    	curSelectIndex: this.props.startIndex ? this.props.startIndex : 0
    };

    this.onTabClicked = this.onTabClicked.bind(this);
  }

  onTabClicked(event) {

  	if (event != null && event.target != null && this.props.onTabClicked != null) {

  		let value = event.target.attributes.value.value;
  		
  		this.props.onTabClicked(Number(value), this.props.tabs[value]);
  		this.setState({curSelectIndex: value});
  	}
  }

  render() {

  	let tabsJXS = [];
  	let tabs = this.props.tabs;

  	if (tabs != null && tabs.length > 0) {

  		for (var i = 0; i < tabs.length; i++) {
  			tabsJXS[i] = <a key={i} value={i} className={ this.state.curSelectIndex == i ? "tab-bar-btn selected" : "tab-bar-btn"} onClick={this.onTabClicked}>{tabs[i]}</a>;
  		}
  	}

    return (
    	<div>
    		<div className="tab-bar mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
	    		{tabsJXS}
			</div>
    	</div>
    );
  }
}
