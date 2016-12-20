import React from 'react';

export default class SearchComponent extends React.Component {
 
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="mui-bar mui-bar-nav NavSearch">
    		<input type="text" placeholder="搜索资讯、数据或研究"/>
	    </div>
    );
  }
}
