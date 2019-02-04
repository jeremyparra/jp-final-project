import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { UserConsumer } from '../context';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Auth(props) {
  return (
    <UserConsumer>
      {({ data, inputChange, handleLogin, handleSignup }) => (
        <div className="authBox">
          <Header />
          <Nav />
          {(props.action === "login") ? (
            <Login
              username={data.username}
              password={data.password}
              handleInputChange={inputChange}
              handleLogin={handleLogin}
            />
          ) : (
              <Signup
                firstname={data.firstname}
                lastname={data.lastname}
                email={data.email}
                username={data.username}
                password={data.password}
                handleInputChange={inputChange}
                handleSignup={handleSignup}
                message={data.failureMessage}
              />
            )}
            <Footer />
        </div>
      )}
    </UserConsumer>
  );
}


export default Auth;