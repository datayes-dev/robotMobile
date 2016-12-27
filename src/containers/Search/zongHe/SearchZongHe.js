import React from 'react';
import { request } from 'request';
import { parser } from './KMapParser';

export default class SearchZongHe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

          components: null//特型组件
        }

        this.analysisKMaps = this.analysisKMaps.bind(this);
    }

    componentDidMount() {

        let _this = this;

        //开始请求特型
        request.start(
            request.KMAP_INIT, 
            {
                data: {
                    input: "300027"
                },
                success: function(response) {

                    if(response.code == 1) {

                        _this.analysisKMaps(response);

                    } else {
                        
                    }
                }, 
                error: function() {

                }
            }
        );	
    }

    analysisKMaps(response) {

        if (response != null && response.kMapBasicInfo != null) {

            let components = parser(response.kMapBasicInfo);
            
            this.setState({
                components: components
            });
        }
    }

    render() {

        let components = this.state.components;
        let componentJXS = [];
        console.log(components);

        if (components != null) {

            let len = components.length;

            for (let i = 0; i < len; ++i) {

                let component = components[i];
                componentJXS[i] = React.createElement(
                  component.component, {key: i, basicInfo: component.basicInfo
                });
            }
        }

        return (
            <div>{componentJXS}</div>
        );
    }

  
}
