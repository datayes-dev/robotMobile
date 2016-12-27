import React from 'react';
import 'css/main.less';
import './CellTitle.less';

//Cell用的蓝色标题, 支持点击更多，折叠展开，收起
//fold 初始化收起，展开
//title 标题内容
//点击更多的回调
export default class CellBlueFoldTitle extends React.Component {
 
	constructor(props) {
		super(props);

		this.state = {

			fold: this.props.fold ? this.props.fold : true,//展开或者收起
			title: this.props.title,
			moreCallBack: this.props.moreCallBack
		}

		this.onFoldBtnClicked = this.onFoldBtnClicked.bind(this);
	}

	//展开，收起
	onFoldBtnClicked() {

		this.setState({
			fold: !this.state.fold,
			title: this.state.title,
			moreCallBack: this.state.moreCallBack
		});
	}

	render() {

		const iconAdd = require('assets/icon_fold_add.png');
		const iconReduce = require('assets/icon_fold_reduce.png');

		return (
		  	<div>
		  		<div className="cell-white-title border-blue-left bottom_gray_line">
		  			<img className="icon" src={!this.state.fold ? iconAdd : iconReduce} onClick={this.onFoldBtnClicked}/>
					<h1 className="mui-title color_B1">{this.state.title}</h1>
					{
						this.props.moreCallBack != null &&
						<a className="mui-inline" onClick={this.props.moreCallBack}>
							<em className="mui-btn">更多</em>
							<p className="mui-icon mui-icon-arrowright mui-pull-left"></p>
						</a>
					}
		  		</div>
		  		
				<div className={this.state.fold ? "cell-white-title-container" : "cell-white-title-container mui-hidden"}>
					{this.props.children}
				</div>
				<div className="cell-white-title-foot"/>
		 	</div>
		);
	}
}
