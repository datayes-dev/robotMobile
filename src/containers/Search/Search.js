import React from 'react';
import { Loading, SimpleTitleBar, InputTitleBar, SimpleTabBar } from 'components';
import { SearchZongHe, SearchAnnouncement, SearchData,SearchNews } from 'containers';

export default class Search extends React.Component {
    constructor(props) {
    
        super(props);

        this.state= {
            searchInput: "",
            curTab: 0
        }

        this.onTabClicked = this.onTabClicked.bind(this);
    }

    render() {

        let tabComponentJXS;

        switch (this.state.curTab) {
            case 0 :
                tabComponentJXS = <SearchZongHe/>;
                break;
            case 1 :
                tabComponentJXS = <SearchData/>;
                break;
            case 2 :
                tabComponentJXS = <SearchAnnouncement/>;
                break;
            case 3 :
                tabComponentJXS = <SearchNews/>;
        }

        return (
        	<div>
        		<InputTitleBar iconClass="mui-icon-search" onInputBarEntered={this.onInputBarEntered} placeholder="搜索资讯、数据或研究"></InputTitleBar>
        		<div className="mui-content">
        			<SimpleTabBar tabs={["综合", "数据", "公告", "新闻"]} onTabClicked={this.onTabClicked}></SimpleTabBar>
        		</div>
                {tabComponentJXS}
        	</div>
        );
    }

    //当input输入完成的时候
    onInputBarEntered(input) {

    	//console.log(input);
    }

    //当tab被点击的时候
    onTabClicked(index, value) {

        this.setState({
            searchInput: this.state.searchInput,
            curTab: index
        });
    }
}
