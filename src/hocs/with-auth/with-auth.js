import React from "react";
import {connect} from "react-redux";
import PageSignIn from "~/components/page-sign-in/page-sign-in.jsx";
import {getUserIsLoggedIn} from "~/reducer/user/selectors";

function WithAuth(props) {
  if (props.isLoggedIn === false) {
    return <PageSignIn/>;
  } else {
    return <>{props.children}</>;
  }
}
const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isLoggedIn: getUserIsLoggedIn(state),
});

export default connect(mapStateToProps)(WithAuth);
