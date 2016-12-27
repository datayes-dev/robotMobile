import React from 'react';
import './ThreeStringClickCell0.less';

//连续3个字符串的小cell 控件，支持点击事件 （相关公司用）
export default class ThreeStringClickCell0 extends React.Component {
 
	constructor(props) {
		super(props);
	}

	render() {

		let contentJXS = new Array();
		
		if (this.props.contents != null) {

			let contents = this.props.contents;
			let len = contents.length;

			for (var i = 0; i < len; i++) {
				
				let content = contents[i];

				if (content instanceof Array && content.length >= 3) {

					contentJXS.push(
						<tr key={i}>
	                        <td>{content[0]}</td>
	                        <td>{content[1]}</td>
	                        <td>{content[2]}
	                        	<nt></nt>
	                        </td>
	                    </tr>
					);
				}
			}
		}

		return (
			<div className="XGYWGS TableBackground">
				<div className="TableBackground">
					<table>
			  			<tbody>
			  				{this.props.children}
		                    { contentJXS }
			  			</tbody>
		            </table>
	            </div>
            </div>
		);
	}
}
