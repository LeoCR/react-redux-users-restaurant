import React from "react";
import { Router, Route, Link } from "react-router-dom";
import history from '../history';
import UserProfile from '../components/user/UserProfile';
import UserHistory from '../components/user/UserHistory';
class UserContainer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Router history={history}>
                    <Link to="/user/profile" className="">Profile</Link>
                    <Link to="/user/history" className="">History</Link>
                    <Route
                        exact
                        path='/user/'
                        render={() => <React.Fragment>
                            <UserProfile/>
                        </React.Fragment>}
                    />
                    <Route
                        exact
                        path='/user/profile'
                        render={() => <React.Fragment>
                            <UserProfile/>
                        </React.Fragment>}
                    />
                    <Route
                        exact
                        path='/user/history'
                        render={() =><React.Fragment>
                            <UserHistory/> 
                        </React.Fragment>}
                    />
                </Router>
            </React.Fragment>
        )
    }
}

export default UserContainer;