import React from 'react';
import './Home.less';
import { Loading, SimpleTitleBar, InputTitleBar, SimpleTabBar,Search_Cell_HeaderView} from 'components';

export default class Home extends React.Component {
    render() {
        const logoImage = require('assets/logo.png');
        return (
            <div className="home">
	            <Search_Cell_HeaderView name="作品信息" hasMore={true} onClick={this.zpClicked}/>
	            <img src={logoImage} alt="Logo" />
            </div>
        );
    }
    
    zpClicked(input) {
		alert(input);
    }
}
 