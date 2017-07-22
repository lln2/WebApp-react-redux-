  
import React from 'react';
 import { connect } from 'react-redux'
 import * as userinfoActions from '../../actions/changeAdd'
 import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
 import * as changeAddActionsFromOtherFile from '../../actions/changeAdd' 
 


import '../style/user.css'


class AddUser extends React.Component{
	 constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(

        <div className="newUser" id="newUser" style={{display:'block'}}>
				<h2>新建收货人地址 <b onClick={this.changeAdd.bind(this) }>X</b></h2>
				<form action='/api/add' method='post' >
				
				
				<div className="list">
					<i>收货人</i>
					<input type="text"  id="username" name="username"  placeholder="请填写收货人姓名" />
				</div>
				<div className="list">
					<i>手机号码</i>
					<input type="text"  id="phone" name="phone"  placeholder="18069788087" />
				</div>
				<div className="list">
					<i>区域信息</i>
					<input type="text"   placeholder="请填写区域信息" />
				</div>
				<div className="list">
					<i>详细地址</i>
					<input type="text" id="address"  name="address"  placeholder="请输入街道门牌信息" />
				</div>
				<div className="list">
					<i>邮政编码</i>
					<input type="text" name="code"  placeholder="可以不填" />
				</div>
				 
				<button type="submit"  onClick={  this.clickHandler.bind(this) }  >保存</button>
				</form>
			</div>
             
        )
    }
		changeAdd(){			  
			 this.props.userInfoActions.close({
            isAdd: 'false'
        })
			  
		}
    
    clickHandler(){
    		this.props.userInfoActions.close({
            isAdd: 'false'
        })
    		
    }

    changeUserInfo() {
        const actions = this.props.actions
        actions.login({
            userid: '123',
            city: 'nanjing'
        })
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
)(AddUser)

 

 

