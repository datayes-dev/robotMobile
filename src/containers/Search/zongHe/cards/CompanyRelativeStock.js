import React from 'react';
import { CellBlueFoldTitle, ThreeStringClickCell0 } from 'components';
import { request } from 'request';

export default class CompanyRelativeStock extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

			show : false,
			companyInfos: null
		}

		this.onMoreClicked = this.onMoreClicked.bind(this);
	}

	componentDidMount() {

		// SEARCH_RELATED_OPERATION
		if (this.props.basicInfo != null) {

			let _this = this;

			request.start(
				request.SEARCH_RELATED_OPERATION, 
				{
					data: {
                        pageNow: 1,
                        pageSize: 5,
                        partyID: this.props.basicInfo.partyID
                    },
                    success: function(response) {

                        if(response.code == 1) {

                        	_this.newWorkFinish(response);

                        } else {
                            
                        }
                    }, 
                    error: function() {

                    }
				}
			);
		}
	}

	newWorkFinish(response) {

		if (response != null && response.kMapCompanyOperationRelatedCompaniesInfo != null 
			&& response.kMapCompanyOperationRelatedCompaniesInfo.operationRelatedCompaniesList != null) {

			this.setState({
				show : true,
				companyInfos: response.kMapCompanyOperationRelatedCompaniesInfo.operationRelatedCompaniesList
			});
		}
	}

	onMoreClicked() {

		//todo 跳转到相关公司的落地页
	}

	render() {

		let companyInfos = this.state.companyInfos;

		if (!this.state.show || companyInfos == null || (companyInfos != null && companyInfos.length <= 0)) {

			return (
		      <div></div>
		    );
		} 

		let len = companyInfos.length;
		let contents = new Array();

		for (let i = 0; i < len; ++i) {

			let companyInfo = companyInfos[i];
			let content = new Array();
			content.push(companyInfo.shortName + "(" + companyInfo.ticker + ")");
			content.push(companyInfo.marketValue);
			content.push(companyInfo.pe);

			contents.push(content);
		}


		return (
			<CellBlueFoldTitle title="相关业务公司" moreCallBack={ this.onMoreClicked }>
		  		<ThreeStringClickCell0 contents={ contents }>
		  			<tr>
                        <th>作品简称及代码</th>
                        <th>总市值(亿元)</th>
                        <th>PE(TTM)</th>
                    </tr>
		  		</ThreeStringClickCell0>
		  	</CellBlueFoldTitle>
		);
	}
}
