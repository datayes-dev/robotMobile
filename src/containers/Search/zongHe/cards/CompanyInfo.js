import React from 'react';
import { CellBlueFoldTitle, SingleStringClickCell } from 'components';
import { request } from 'request';

export default class CompanyInfo extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			show: false,
			contents: null
		};

		this.onMoreClicked = this.onMoreClicked.bind(this);
	}

	componentDidMount() {

		if (this.props.basicInfo != null) {

			let _this = this;

			request.start(
				request.SEARCH_COMPANY_INFO, 
				{
					data: {
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

		console.log(response);

		if (response != null && response.kMapCompanyBasicInfo != null) {

			let kMapCompanyBasicInfo = response.kMapCompanyBasicInfo;

			

			this.setState({
				show : true,
				companyInfos: response.kMapCompanyOperationRelatedCompaniesInfo.operationRelatedCompaniesList
			});
		}
	}

	render() {
		return (
		  	<CellBlueFoldTitle>
		  		<SingleStringClickCell></SingleStringClickCell>
		  	</CellBlueFoldTitle>
		);
	}
}
