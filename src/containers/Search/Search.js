import React from 'react';
import { Loading, SimpleTitleBar, InputTitleBar, SimpleTabBar } from 'components';
import { SearchZongHe, SearchAnnouncement, SearchData,SearchNews } from 'containers';

//搜索
export default class Search extends React.Component {
    
    constructor(props) {
    
        super(props);

        this.state= {
            searchInput: "",
            curTab: 0
        }

        this.onTabClicked = this.onTabClicked.bind(this);
        this.onInputBarEntered = this.onInputBarEntered.bind(this);
    }

    //当input输入完成的时候
    onInputBarEntered(input) {

    	this.setState({
            searchInput: input,
            curTab: this.state.curTab
        });
    }

    //当tab被点击的时候
    onTabClicked(index, value) {

        this.setState({
            searchInput: this.state.searchInput,
            curTab: index
        });
    }

    render() {

        return (
            <div>
                <InputTitleBar iconClass="mui-icon-search" onInputBarEntered={this.onInputBarEntered} placeholder="搜索资讯、数据或研究"></InputTitleBar>
                <div className="mui-content">
                    <SimpleTabBar tabs={["综合", "数据", "公告", "新闻"]} onTabClicked={this.onTabClicked}></SimpleTabBar>
                </div>
                <SearchZongHe searchInput={this.state.searchInput} show={this.state.curTab == 0}/>
                <SearchData searchInput={this.state.searchInput} show={this.state.curTab == 1}/>
                <SearchAnnouncement searchInput={this.state.searchInput} show={this.state.curTab == 2}/>
                <SearchNews searchInput={this.state.searchInput} show={this.state.curTab == 3}/>
            </div>
        );
    }
}
