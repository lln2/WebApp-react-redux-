 
import React from 'react';
 import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
 import '../style/user.css';
import { bindActionCreators } from 'redux'
import * as changeAddActionsFromOtherFile from '../../actions/changeAdd' 

class Warning extends React.Component{
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(

         	<div className="warning clearfix" id="warning" style={{display:'block'}}>
				<p>确认要将这个地址 删除吗</p>
				<div className="unable fl" id="unable" onClick={this.disWa.bind(this) }>取消</div>
				<div className="enable fr" id="enable" onClick={this.changeWa.bind(this)} >确认</div>			 
			</div>
             
        )
    }
    changeWa(){
    	 
    	this.props.userInfoActions.open({
     		showWa: 'false'
     	})
    	window.location = '/'
    }
    disWa(){
    	this.props.userInfoActions.open({
     		showWa: 'false'
     	})
    }
    componentDidMount(){
    	 
    }
}

function mapStateToProps(state) {
    return {
    	 
    }
}
function mapDispatchToProps(dispatch) {
    return {
    	 
          userInfoActions: bindActionCreators(changeAddActionsFromOtherFile, dispatch)
   			
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Warning)

 

