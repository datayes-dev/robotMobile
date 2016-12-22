import React from 'react';
import 'normalize.css';
import style from './App.less';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                </header>
                <section>
                    {this.props.children}
                </section>
                <footer>
                </footer>
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element
};
