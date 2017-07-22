 
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import Warning from '../warning/Warning'
import '../style/user.css'
import UpdateUser from '../updateUser/UpdateUser'
import { bindActionCreators } from 'redux'
import * as changeAddActionsFromOtherFile from '../../actions/changeAdd' 
import { getUserData } from '../../fetch/home/home'
import { delUserData } from '../../fetch/home/home'

class UserList extends React.Component{
	constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
        	data:[]
        }
    }
    render(){
        return(
		 	<div>
		 		 
			    <div className="ad-container clear-fix">
                    {this.state.data.map((item, index) => {
                    	
                       
                       return <div key={index} className="customer clearfix"   >
								<p>收货人：{item.name}  <b> {item.phone} </b></p>
								<p className="address">地址：{item.address}  </p>
								<div className="edit">
								<div className="check fl">
									<input type="radio" /> 设为默认
								</div>
								<div className="delUp fr"> <a href="#"   onClick={this.changeUp.bind(this)}     >编辑</a> | <a href="#" onClick={this.changeWa.bind(this , item._id)} >删除</a>  </div>
								</div>
						      </div>
                        
                    })}
                </div>
			    
			    
			    {
			    	this.props.showWa.showUp == 'true'?
			    	<UpdateUser  isUp={this.props.showUp.showUp} />:
			    	""
			    }
			    
				 {
				 	this.props.showWa.showWa == 'true'?
				 	<Warning  isWa={this.props.showWa.showWa} />:
				 	""
				 	  
				  	
				 }
			    
			     
		 	
		 	</div>
			  
			
		 
         	
             
        )
    }
  	changeWa(id){
  	 	console.log('嗨'+id)
  		this.props.userInfoActions.open({
     		showWa: 'true'
     	 
     	})
  		delUserData(id)
  		 
  	}
  	changeUp(){
  	 
  		this.props.userInfoActions.open({     	 
     		showUp:'true'
     	})
  	}
    componentDidMount(){     	 
     	this.props.userInfoActions.open({
     		showWa: 'false',
     		showUp:'false'
     	})
     	
     	  // 获取用户数据
        const result = getUserData()
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('首页广告模块获取数据报错, ', ex.message)
            }
        })
     	
    }
  
      
  
    
}

function mapStateToProps(state) {
    return {
    	 showWa:state.changeAdd,
    	 showUp:state.changeAdd
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
)(UserList)

 
 

