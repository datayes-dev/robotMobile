import React from 'react';

/**
一个简单的tabBar
**/
export default class SimpleTabBar extends React.Component {
  
  constructor(props) {
    super(props);

    this.onTabClicked = this.onTabClicked.bind(this);
  }

  onTabClicked(event) {

  	if (event != null && event.target != null && this.props.onTabClicked != null) {

  		let value = event.target.attributes.value.value;
  		
  		this.props.onTabClicked(value, this.props.tabs[value]);
  	}
  }

  render() {

  	let tabsJXS = [];
  	let tabs = this.props.tabs;

  	if (tabs != null && tabs.length > 0) {

  		for (var i = 0; i < tabs.length; i++) {
  			tabsJXS[i] = <a key={i} value={i} className="mui-control-item" onClick={this.onTabClicked}>{tabs[i]}</a>;
  		}
  	}

    return (
    	<div className="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
    		{tabsJXS}
		</div>
    );
  }
}
