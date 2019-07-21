import React from "react";
import {connect} from "react-redux";
class UserHistory extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>User History</h1>
            </React.Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
      user:state.user.user
    }
}
export default connect(mapStateToProps)(UserHistory);