import React from 'react';

class Loading extends React.Component {
    render() {
        const loadingImg = require('assets/loading.png');
        return (
            <div>
                <img src={loadingImg} alt="Loading" />
                <p>{this.props.text || 'Loading...'}</p>
            </div>
        );
    }
}

Loading.propTypes = {
    text: React.PropTypes.string
};

export default Loading;
