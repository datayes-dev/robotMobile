import React from 'react';
import { request } from 'request';
import { parser } from './KMapParser';

export default class SearchZongHe extends React.Component {

    constructor(props) {
        super(props);

        //上一次搜索的字符串
        this.lastSearchInput = "";

        this.state = {

          components: null//特型组件
        }

        this.analysisKMaps = this.analysisKMaps.bind(this);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.show && nextProps.searchInput != null 
          && nextProps.searchInput.length > 0 && nextProps.searchInput != this.lastSearchInput) {

            let _this = this;

            this.lastSearchInput = nextProps.searchInput;

            //开始请求特型
            request.start(
                request.KMAP_INIT, 
                {
                    data: {
                        input: nextProps.searchInput
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
            <div className={this.props.show ? "" : "mui-hidden"}>{componentJXS}</div>
        );
    }

  
}
