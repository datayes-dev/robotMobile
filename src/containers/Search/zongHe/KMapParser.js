import CompanyMarketInfo from './cards/CompanyMarketInfo';
import RelativeData from './cards/RelativeData';
import RelativeAnnounce from './cards/RelativeAnnounce';
import RelativeNews from './cards/RelativeNews';
import CompanyInfo from './cards/CompanyInfo';
import CompanyFinanceInfo from './cards/CompanyFinanceInfo';
import MediaWorks from './cards/MediaWorks';


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
];

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

