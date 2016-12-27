import { SERVICE_TYPE, BASE_URL, SUB_SERVICE_URL } from 'config';

class RequestUrl {

	constructor() {

		this.getBaseUrl = this.getBaseUrl.bind(this);
		this.getRequestUrl = this.getRequestUrl.bind(this);
	}

	getBaseUrl() {

		if (SERVICE_TYPE == "PRD") {

			return BASE_URL.PRD;

		} else if (SERVICE_TYPE == "QA") {

			return BASE_URL.QA;

		} else {

			return BASE_URL.QA;
		}

		return "";
	}

	//获取请求url
	getRequestUrl(requestInfo) {

		if (requestInfo != null 
			&& requestInfo.type != null 
			&& requestInfo.serviceType != null && requestInfo.url != null) {

			return this.getBaseUrl() + requestInfo.serviceType + requestInfo.url;
		}

		return "";
	}

	//开始请求
	start(requestInfo, obj) {

		if (requestInfo != null 
			&& requestInfo.type != null 
			&& requestInfo.serviceType != null && requestInfo.url != null) {

			obj.type = requestInfo.type;
			obj.url = this.getRequestUrl(requestInfo);

			$.ajax(obj);	
		}
	}

	//////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////
	//请求

	get KMAP_INIT() {

		return {
			type: "GET",
			serviceType: SUB_SERVICE_URL.MOBILE,
			url: "/whitelist/kmap/init"
		};
	}
}


let request = new RequestUrl();
export { request };
