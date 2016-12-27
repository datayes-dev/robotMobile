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
		  		<table>
		  			<tbody>
		  				<tr>
	                        <th>作品简称及代码</th>
	                        <th>总市值(亿元)</th>
	                        <th>PE(TTM)</th>
	                    </tr>
	                    <tr>
	                        <td>当代东方(000786)</td>
	                        <td>201</td>
	                        <td>50.32<nt></nt></td>
	                    </tr>
		  			</tbody>
                </table>
		  	</CellBlueFoldTitle>
		);
	}
}
