import React from "react";
import { Router, Route, Link } from "react-router-dom";
import history from '../history';
import UserProfile from '../components/user/UserProfile';
import UserHistory from '../components/user/UserHistory';
import UserInvoice from "../components/user/UserInvoice";
const UserContainer=()=>{
        return(
            <React.Fragment>
                <Router history={history}>
                    <ul className="nav nav-tabs">
                        <li className="tab-link">
                            <Link to="/user/profile" className="nav_tab">Profile</Link>
                        </li>
                        <li className="tab-link">
                            <Link to="/user/history" className="nav_tab">History</Link>
                        </li>   
                    </ul>
                    <div className="tabs-content">
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
                        <Route
                            exact
                            path='/user/history/invoice/:order_code'
                            component={UserInvoice}
                        />
                    </div>
                </Router>
            </React.Fragment>
        )
}

export default UserContainer;