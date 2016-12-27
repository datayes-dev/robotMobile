import { SERVICE_TYPE, BASE_URL, SUB_SERVICE_URL } from 'config';

//请求管理类
class Request {

	//////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////
	//请求

	constructor() {

		this.getBaseUrl = this.getBaseUrl.bind(this);
		this.getRequestUrl = this.getRequestUrl.bind(this);

		//////////////////////////////////////////////////////////////////////
		///这里写接口配置

		//获取搜索特型接口
		this.KMAP_INIT = {
			type: "GET",
			serviceType: SUB_SERVICE_URL.MOBILE,
			url: "/whitelist/kmap/init"
		};
	}

	//////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////

	//获取BaseUrl
	getBaseUrl() {

		if (SERVICE_TYPE == "PRD") {

			return BASE_URL.PRD;

		} else if (SERVICE_TYPE == "QA") {

			return BASE_URL.QA;

		} else {

			return BASE_URL.STG;
		}

		return "";
	}

	//获取请求url
	getRequestUrl(requestInfo) {

		if (requestInfo != null 
			&& requestInfo.type != null 
			&& requestInfo.serviceType != null && requestInfo.url != null) {

			//这里处理MOBILE的特殊情况
			if (requestInfo.serviceType == SUB_SERVICE_URL.MOBILE) {

				if (SERVICE_TYPE == "PRD") {

					return this.getBaseUrl() + SUB_SERVICE_URL.MOBILE.PRD + requestInfo.url;

				} else if (SERVICE_TYPE == "QA") {

					return this.getBaseUrl() + SUB_SERVICE_URL.MOBILE.STG + requestInfo.url;

				} else {

					return this.getBaseUrl() + SUB_SERVICE_URL.MOBILE.QA + requestInfo.url;
				}

			} else {

				return this.getBaseUrl() + requestInfo.serviceType + requestInfo.url;
			}
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

			//ajax
			_$.ajax(obj);	
		}
	}
}

let request = new Request();
export { request };
