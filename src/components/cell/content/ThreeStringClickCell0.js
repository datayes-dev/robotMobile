import React from 'react';

//连续3个字符串的小cell 控件，支持点击事件 （相关公司用）
export default class ThreeStringClickCell0 extends React.Component {
 
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="XGYWGS TableBackground">
				<table>
		  			<tbody>
		  				{this.props.children}
	                    <tr>
	                        <td>当代东方(000786)</td>
	                        <td>201</td>
	                        <td>50.32<nt></nt></td>
	                    </tr>
		  			</tbody>
	            </table>
            </div>
		);
	}
}
