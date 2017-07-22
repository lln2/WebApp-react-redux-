 
import React from 'react';
import AddUser from '../AddUser/AddUser'

import { connect } from 'react-redux'
 import * as userInfoActions from '../../actions/changeAdd'
 import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import * as changeAddActionsFromOtherFile from '../../actions/changeAdd' 
import '../style/user.css';


class AddButton extends React.Component{
	 constructor(props, context) {
        super(props, context);
         this.state = {
            index: '新地址',
            isState:true
        }
        
    }
    render(){
        return(
        	<div>
        		 
	         	<div className="addBtn" id="addBtn" onClick={this.AddUser.bind(this)}   >
					  {this.props.Show.isAdd} 添加 {this.state.index}
				</div>
				{
					this.props.Show.isAdd=='true'?
					<AddUser isAdd={this.props.Show.isAdd} />:
					""
				}
				
        		
        	</div>
			
            
        )
    }
    AddUser(){
    	 
    	
		this.props.userInfoActions.open({
            isAdd: 'true'
        })
		  
    }
     componentDidMount() {
        // 获取位置信息
       
         
       this.props.userInfoActions.close({
            isAdd: 'false'
        })
       
    }
    
}

 function mapStateToProps(state) {
    return {
    	Show:state.changeAdd
    }
}
function mapDispatchToProps(dispatch) {
    return {
    	
         userInfoActions: bindActionCreators(changeAddActionsFromOtherFile, dispatch),
   			
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton)


 

