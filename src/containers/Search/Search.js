import React from 'react';
import { Loading, SimpleTitle } from 'components';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Loading Search Page'
        }
    }
    render() {
        return <SimpleTitle title="aabb"></SimpleTitle>;
    }
}
