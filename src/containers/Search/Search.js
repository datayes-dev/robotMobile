import React from 'react';
import { Loading, SimpleTitleBar } from 'components';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Loading Search Page'
        }
    }
    render() {
        return <SimpleTitleBar title="aabb" backEanble="false"></SimpleTitleBar>;
    }
}
