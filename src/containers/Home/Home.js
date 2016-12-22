import React from 'react';
import style from './Home.less';

export default class Home extends React.Component {
    render() {
        const logoImage = require('assets/logo.png');
        return (
            <div className={style.home}>
                <img src={logoImage} alt="Logo" />
            </div>
        );
    }
}
