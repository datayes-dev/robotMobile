import React from 'react';
import { SingleStringClickCell } from 'components';
import { request } from 'request';
import { CellBlueFoldTitle } from 'components';

export default class MediaPersonInfo extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

			show: false,
			personInfos: null
		}

		this.onMoreClicked = this.onMoreClicked.bind(this);
		
	}
	onMoreClicked() {

		//todo 跳转到相关公司的落地页
	}
	
		onsClicked() {

		//todo 跳转到相关公司的落地页
	}
	
	
	componentDidMount() {
		console.log((this.props.basicInfo.keywordsInfo[0]).entityID);

		let _this = this;
		//
		//开始请求特型
		request.start(
			request.SEARCH_PERSON_INFO, {
				data: {
					entityID: (this.props.basicInfo.keywordsInfo[0]).entityID
				},
				success: function(response) {
				
					if(response.code == 1) {
						_this.actorDetailRequestHandle("success", response);
						console.log(response);
					} else {
						_this.actorDetailRequestHandle("fail", reqContent);
					}

				},
				error: function() {
					_this.actorDetailRequestHandle("fail", reqContent);
				}
			}
		);
	}

	//设置演员模块
	 actorDetailRequestHandle(isSuccess, jsonStr) {
		if(isSuccess == "success") {
		
			var data = jsonStr.kMapMediaPersonInfo;
			var contentHtml = "";
			var contentArray = new Array();
			if(data.managementCompany != null) {
				contentHtml = '经纪公司：' + data.managementCompany;
				contentArray.push(contentHtml);
			} else {
				contentHtml = '经纪公司：--';
				contentArray.push(contentHtml);
			}

			if(data.birthday != null) {
				contentHtml = '出生日期：' + data.birthday;
				contentArray.push(contentHtml);
			} else {
				contentHtml = '出生日期：-- ';
				contentArray.push(contentHtml);
			}

			var knownWorksHtml = '代表作品：';
			if(data.knownWorks != null && data.knownWorks.length > 0) {
			 
				for(var i = 0; i < data.knownWorks.length; i++) {
					var work = data.knownWorks[i];
			
					knownWorksHtml = knownWorksHtml + work.name;
					if(i != data.knownWorks.length-1){
						knownWorksHtml = knownWorksHtml + "、";
					}
				}
			} else {
				knownWorksHtml = knownWorksHtml + "--";
			}
			
			contentArray.push(knownWorksHtml);
									
		} else {
		 
			var contentArray = new Array();
		}
	
		this.setState({
			show: true,
			personInfos: contentArray
		});
	}
	
	
	render() {

	var baseInfos = this.state.personInfos;
 
	if(!this.state.show || baseInfos == null || (baseInfos != null && baseInfos.length <= 0)) {
				return (
		      <div></div>
		    );
	} 
	
		return (
			<CellBlueFoldTitle title="个人信息" moreCallBack={ this.onMoreClicked }>
		  	    <SingleStringClickCell contents={baseInfos}></SingleStringClickCell>
		  	</CellBlueFoldTitle>
		);
	}
	
}