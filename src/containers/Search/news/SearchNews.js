import React from 'react';

export default class SearchNews extends React.Component {

	constructor(props) {
		super(props);

		
	}

	render() {
		return (
		  <div className={this.props.show ? "" : "mui-hidden"}>新闻</div>
		);
	}
}
