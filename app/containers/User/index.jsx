import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import AddButton from '../../components/AddButton/AddButton'
import UserList from '../../components/UserList/UserList'
import AddUser from '../../components/AddUser/AddUser'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                 
                 <AddButton />
                 <UserList />
                 
                 
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default User
module.exports = User