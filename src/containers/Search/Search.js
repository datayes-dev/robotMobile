import React from 'react';
import { Loading, SimpleTitleBar, InputTitleBar, SimpleTabBar } from 'components';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Loading Search Page'
        }
    }
    
    render() {
        return (
        	<div>
        		<InputTitleBar iconClass="mui-icon-search" onInputBarEntered={this.onInputBarEntered} placeholder="搜索资讯、数据或研究"></InputTitleBar>
        		<div className="mui-content">
        			<SimpleTabBar tabs={["综合", "数据", "公告", "新闻"]} onTabClicked={this.onTabClicked}></SimpleTabBar>
        		</div>
        	</div>
        );
    }

    //当input输入完成的时候
    onInputBarEntered(input) {

    	//console.log(input);
    }

    //当tab被点击的时候
    onTabClicked(index, value) {

		//console.log(index, value);
    }
}
