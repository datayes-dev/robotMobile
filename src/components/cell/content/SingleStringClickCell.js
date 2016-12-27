import React from 'react';
import './SingleStringClickCell.less';

/**

**/
export default class SingleStringClickCell extends React.Component {

  constructor(props) {
    super(props);

    this.onTabClicked = this.onTabClicked.bind(this);
  }

  onTabClicked(event) {
	
  	if (event != null && event.target != null && this.props.onTabClicked != null) {
	 	alert(1);
  	  		let value = event.target.attributes.value.value;
  	  		
  			this.props.onTabClicked(Number(value), this.props.contents[value]);
  	}
  }
  
  render() {
  	
  	let tabsJXS = [];
  	let contents = this.props.contents;
  	let hasMores = this.props.hasMores;

  	if (contents != null && contents.length > 0) {

  		for (var i = 0; i < contents.length; i++) {
  			var moreFlag = false;
  			if(hasMores != null  && hasMores.length > i){
  				moreFlag = hasMores[i];
  			}
  			tabsJXS[i] = <li key={i} value={i} onClick={this.onTabClicked}><h3> {contents[i]} </h3>
  			{
  				moreFlag&&<nt></nt>
  			}
  			</li>;
  		}
  	}
  	
  	
    return (
    		<div className="SearchInfoList">
	    		    <ul>
                {tabsJXS}
                </ul>
	     </div>
    );
  }
}
