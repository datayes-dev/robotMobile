import React from 'react';
import './Search_Cell_HeaderView.less';

/**

**/
export default class Search_Cell_HeaderView extends React.Component {

   static propTypes = { // as static property
//     imValue: React.PropTypes.string
   };
   static defaultProps = { // as static property
       imValue:'',
       hasMore:false
   };
  
  constructor(props) {
    super(props);
    this.state = {
    		imValue: this.props.imValue
    }
  }
  

  render() {
  	
  	
    return (
    		<div className="CellHeader">
	    		 <em></em>
			 <h3><im></im>{this.props.name}</h3>
			 {
			 	this.props.hasMore&&<h4>更多<nt></nt></h4>
			 }
	     </div>
    );
  }
}
