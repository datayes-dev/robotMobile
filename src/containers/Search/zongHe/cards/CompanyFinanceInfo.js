import React from 'react';
import { CellBlueFoldTitle } from 'components';

export default class CompanyFinanceInfo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <CellBlueFoldTitle title="财务信息">公司财务信息</CellBlueFoldTitle>
		);
	}
}
