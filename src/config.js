
//配置文件

//PRD, STG, QA
export const SERVICE_TYPE = "STG";

//网络请求BaseUrl
export const BASE_URL = {

	PRD: "https://gw.wmcloud.com",
	STG: "https://gw.wmcloud-stg.com",
	QA: "https://gw.wmcloud-stg.com"
};

//子服务器 url
export const SUB_SERVICE_URL = {

	NOMRAL: "",
    RRP: "/rrp/mobile",
    MOBILE: {
    	PRD: "/ira/mobile",
		STG: "/rrpqa/mobile",
		QA: "/ira/mobile"
    },
    MOBILE_MASTER: "/mobilemaster",
    CLOUD: "/cloud",
    USER_MASTER: "/usermaster",
    WEB_VIEW_PAGE_INFO: "/information/news/",
    WEB_VIEW_PAGE_RESEARCH: "/information/research/",
    WEB_VIEW_PAGE_ANNOUNCEMENT: "/information/announcement/",
    WEB_VIEW_PAGE_EVENT: "",
    WEB_MIAL: "/webmail"
};


