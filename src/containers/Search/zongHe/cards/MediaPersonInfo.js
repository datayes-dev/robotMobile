import React from 'react';
import {
	request
} from 'request';

import {
	CellBlueFoldTitle
} from 'components';

export default class MediaPersonInfo extends React.Component {

	constructor(props) {
		super(props);
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
					alert(12);
					if(response.code == 1) {
						actorDetailRequestHandle("success", response);
						console.log(response);
					} else {
						actorDetailRequestHandle("fail", reqContent);

					}

				},
				error: function() {
					actorDetailRequestHandle("fail", reqContent);

				}
			}
		);
	}

	//设置演员模块
	function actorDetailRequestHandle(isSuccess, jsonStr) {
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
				knownWorksHtml = knownWorksHtml + getNameAndLinkByData(data.knownWorks[0]);
				for(var i = 1; i < data.knownWorks.length; i++) {
					knownWorksHtml = knownWorksHtml + "、" + getNameAndLinkByData(data.knownWorks[i]);
				}
			} else {
				knownWorksHtml = knownWorksHtml + "--";
			}
			contentArray.push(knownWorksHtml);
		} else {
			var contentArray = new Array();
			var contentHtml = "";
			contentHtml = '经纪公司：--';
			contentArray.push(contentHtml);
			contentHtml = '出生日期：-- ';
			contentArray.push(contentHtml);
			var knownWorksHtml = '代表作品：--';
			contentArray.push(knownWorksHtml);
		}
	}

	render() {
		return( <
			CellBlueFoldTitle title = "个人信息" > 传媒特型ss 演员基本信息 < /CellBlueFoldTitle>
		);
	}
}