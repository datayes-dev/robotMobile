import CompanyMarketInfo from './cards/CompanyMarketInfo';
import RelativeData from './cards/RelativeData';
import RelativeAnnounce from './cards/RelativeAnnounce';
import RelativeNews from './cards/RelativeNews';
import CompanyInfo from './cards/CompanyInfo';
import CompanyFinanceInfo from './cards/CompanyFinanceInfo';
import MediaWorks from './cards/MediaWorks';
import CompanyRelativeStock from './cards/CompanyRelativeStock';
import CarZhuYing from './cards/CarZhuYing';
import MediaPersonInfo from './cards/MediaPersonInfo';
import MediaPersonBaidu from './cards/MediaPersonBaidu';
import MediaProductionInfo from './cards/MediaProductionInfo';
import MediaProductionData from './cards/MediaProductionData';
import OnePicture from './cards/OnePicture';


//个股特型
const CARD_LIST = [
	{
		name: "个股行情",
		component: CompanyMarketInfo,//对应组件
		enable: function(basicInfo) {//显示条件

			return basicInfo != null && basicInfo.ticker != null;
		}
	},
	{
		name: "公司信息",
		component: CompanyInfo,//对应组件
		enable: function(basicInfo) {//显示条件

			return basicInfo != null && basicInfo.isSec != null && basicInfo.partyID != null;
		}
	},
	{
		name: "公司财务信息",
		component: CompanyFinanceInfo,//对应组件
		enable: function(basicInfo) {//显示条件

			return basicInfo != null && basicInfo.isSec != null && basicInfo.ticker != null;
		}
	},
	{
		name: "传媒特型-公司作品信息",
		component: MediaWorks,//对应组件
		enable: function(basicInfo) {//显示条件

			return basicInfo != null && basicInfo.properties != null
			 && basicInfo.properties.works != null && basicInfo.properties.works.length > 0;
		}
	},
	{
		name: "汽车特型-主营车型",
		component: CarZhuYing,//对应组件
		enable: function(basicInfo) {//显示条件

			return basicInfo != null && basicInfo.properties != null
			 && basicInfo.properties.modelList != null && basicInfo.properties.modelList.length > 0;
		}
	},
	{
		name: "公司相关公司",
		component: CompanyRelativeStock,//对应组件
		enable: function(basicInfo) {//显示条件

			return basicInfo != null && basicInfo.isSec != null && basicInfo.properties != null
			 && basicInfo.properties.relComp != null && basicInfo.properties.relComp;
		}
	},

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //传媒其他特型
    {
		name: "传媒特型-演员基本信息",
		component: MediaPersonInfo,//对应组件
		enable: function(basicInfo) {//显示条件

			if (basicInfo != null && basicInfo.keywordsInfo != null && basicInfo.keywordsInfo.length > 0) {

				let keyword = basicInfo.keywordsInfo[0];

				if (keyword.type != null && keyword.searchType != null 
					&& keyword.type == "mediaPerson" && keyword.searchType == "media") {

					return true;
				}
			}

			return false;
		}
	},
	{
		name: "传媒特型-演员作品列表",
		component: MediaWorks,//对应组件
		enable: function(basicInfo) {//显示条件

			if (basicInfo != null && basicInfo.keywordsInfo != null && basicInfo.keywordsInfo.length > 0) {

				let keyword = basicInfo.keywordsInfo[0];

				if (keyword.type != null && keyword.searchType != null 
					&& keyword.properties != null && keyword.properties.works != null 
					&& keyword.properties.works.length > 0
					&& keyword.type == "mediaPerson" && keyword.searchType == "media") {

					return true;
				}
			}

			return false;
		}
	},
	{
		name: "传媒特型-演员百度指数",
		component: MediaPersonBaidu,//对应组件
		enable: function(basicInfo) {//显示条件

			if (basicInfo != null && basicInfo.keywordsInfo != null && basicInfo.keywordsInfo.length > 0) {

				let keyword = basicInfo.keywordsInfo[0];

				if (keyword.type != null && keyword.searchType != null 
					&& keyword.baiduIndex != null && keyword.baiduIndex
					&& keyword.type == "mediaPerson" && keyword.searchType == "media") {

					return true;
				}
			}

			return false;
		}
	},
	{
		name: "传媒特型-作品基本信息",
		component: MediaProductionInfo,//对应组件
		enable: function(basicInfo) {//显示条件

			if (basicInfo != null && basicInfo.keywordsInfo != null && basicInfo.keywordsInfo.length > 0) {

				let keyword = basicInfo.keywordsInfo[0];

				if (keyword.type != null && keyword.searchType != null 
					&& keyword.searchType == "media") {

					return (keyword.type == "series" || keyword.type == "program" || keyword.type == "movie");
				}
			}

			return false;
		}
	}
	,
	{
		name: "传媒特型-相关数据图表",
		component: MediaProductionData,//对应组件
		enable: function(basicInfo) {//显示条件

			if (basicInfo != null && basicInfo.keywordsInfo != null && basicInfo.keywordsInfo.length > 0) {

				let keyword = basicInfo.keywordsInfo[0];

				if (keyword.type != null && keyword.searchType != null 
					&& keyword.searchType == "media") {

					if (keyword.type == "series" || keyword.type == "program" || keyword.type == "movie") {

						if (keyword.baiduIndex != null && keyword.baiduIndex)
							return true;

						if (keyword.movieBox != null && keyword.movieBox)
							return true;
					}
				}
			}

			return false;
		}
	},
	{
		name: "一张图看懂",
		component: OnePicture,//对应组件
		enable: function(basicInfo) {//显示条件

			if (basicInfo != null && basicInfo.keywordsInfo != null && basicInfo.keywordsInfo.length > 0) {

				let keyword = basicInfo.keywordsInfo[0];

				if (keyword.type != null && keyword.entityID != null 
					&& keyword.type == "onePic") {

					return true;
				}
			}

			return false;
		}
	}

	

];

//特型解析器
let parser = function(basicInfo) {

	let components = new Array();  

	if (basicInfo != null) {

		let hasTeXing = false;
		let len = CARD_LIST.length;

		//判断特型
		for (let i = 0; i < len; ++i) {

			let card = CARD_LIST[i];

			if (card.enable != null 
				&& card.component != null 
				&& card.enable instanceof Function 
				&& card.enable(basicInfo)) {

				components.push({
					component: card.component,
					basicInfo: basicInfo
				});

				//判断是否有股票行情
				if (card.component != CompanyMarketInfo)
					hasTeXing = true;
			}
		}

		//无特型
		if (!hasTeXing) {

			//无特型-相关数据
			components.push({
				component: RelativeData,
				basicInfo: basicInfo
			});
			//无特型-相关公告
			components.push({
				component: RelativeAnnounce,
				basicInfo: basicInfo
			});
			//无特型-相关新闻
			components.push({
				component: RelativeNews,
				basicInfo: basicInfo
			});
		}
	}
	
	return components;
}

export { parser };

