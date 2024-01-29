// import { useState } from 'react'
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import SignUp from "./Components/Register/SignUp";
import SignIn from "./Components/Login/SignIn";

function App() {
  // const [count, setCount] = useState(0)
  componentDidMount = () => {
    this.props.getProfile();
  };

  return (
    <>
      <Route path="/SignUp" component={SignUp}></Route>
      <Route path="/Login" component={SignIn}></Route>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfile()),
});
export default connect(null, mapDispatchToProps)(App);
