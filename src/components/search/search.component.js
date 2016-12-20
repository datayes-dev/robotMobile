import React from 'react';

export default class SearchComponent extends React.Component {
 
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="mui-bar">
    		<input type="text" placeholder={this.props.contentText}/>
	    </div>
    );
  }
}
