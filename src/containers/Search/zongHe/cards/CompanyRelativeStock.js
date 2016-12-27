import React from 'react';
import { CellBlueFoldTitle } from 'components';
import { request } from 'request';

export default class CompanyRelativeStock extends React.Component {

	constructor(props) {
		super(props);

		this.onMoreClicked = this.onMoreClicked.bind(this);
	}

	componentDidMount() {

		console.log(this.props);
		// SEARCH_RELATED_OPERATION
		// if () {

		// }
	}

	onMoreClicked() {

	}

	render() {
		return (
		  	<CellBlueFoldTitle title="相关业务公司" moreCallBack={this.onMoreClicked}>

		  	</CellBlueFoldTitle>
		);
	}
}
