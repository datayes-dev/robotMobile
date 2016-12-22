import React from 'react';
import { Loading, SimpleTitleBar, InputTitleBar } from 'components';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Loading Search Page'
        }
    }
    render() {
        return <InputTitleBar iconClass="mui-icon-search" onInputBarEntered={this.onInputBarEntered} placeholder="搜索资讯、数据或研究"></InputTitleBar>;
    }

    onInputBarEntered(input) {

    	console.log(input);
    }
}
