
import React from 'react'; 
 import { connect } from 'react-redux'
 import * as userinfoActions from '../../actions/changeAdd'
 import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
 import * as changeAddActionsFromOtherFile from '../../actions/changeAdd'  
 
 
 import '../style/user.css';


class UpdateUser extends React.Component{
	 
    render(){
        return(

         	<div className="newUser updateUser" id="updateUser">
				<h2>修改收货人地址 <b onClick={ this.disUp.bind(this) }>X</b></h2>
				<div className="list">
					<i>收货人</i>
					<input type="text"   placeholder="测试" />
				</div>
				<div className="list">
					<i>手机号码</i>
					<input type="text"   placeholder="18069788087" />
				</div>
				<div className="list">
					<i>区域信息</i>
					<input type="text"   placeholder="浙江省杭州市" />
				</div>
				<div className="list">
					<i>详细地址</i>
					<input type="text"   placeholder="浙江省杭州市拱墅区北部软件园" />
				</div>
				<div className="list">
					<i>邮政编码</i>
					<input type="text"   placeholder="130000" />
				</div>
				<button onClick={ this.disUp.bind(this) }  >保存</button>
				<button className="del" onClick={ this.disUp.bind(this) }  >删除</button>
			
			</div>
             
        )
    }
    
     disUp(){
    	this.props.userInfoActions.open({
     		showUp: 'false'
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
)(UpdateUser)

 
 

 

