import React from "react";
import { UserConsumer } from '../../context';
import { Link} from "react-router-dom"
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import "./profile.css"


function Profile(props) {
    return (
        <UserConsumer>
        {({ data, logout }) => (
        <div>
           <Header />
           <Nav/>
              {(data.loggedIn)? (
                <div>
                    <div id="myContainer">
                       <span id="message">Welcome back {data.user.firstname}</span>
                       <button className="btn btn-primary login" onClick={logout}>Logout</button>
                    </div>
                </div>
            ): (
                <div>
                    <div id="myContainer">
                    <span id="message">Log in to view this page</span><br />
                    <Link to="/login"><button className="btn btn-primary login"> Login </button></Link>
                    </div>
                </div>
            )}
        </div>
      )}
      </UserConsumer>
    )
    
}

export default Profile;