import React from "react";
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {connect} from "react-redux";
import {getUserIsLoggedIn} from "~/reducer/user/selectors";

const WithAuthRoute = (props) => {
  if (props.isLoggedIn) {
    return <Route {...props}/>;
  } else {
    return <Redirect to={{
      pathname: `/login`,
      state: {from: props.location}
    }}/>;
  }
};
WithAuthRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isLoggedIn: getUserIsLoggedIn(state),
});

export default connect(mapStateToProps)(WithAuthRoute);
