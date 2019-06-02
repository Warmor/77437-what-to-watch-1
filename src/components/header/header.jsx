import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getUser, getUserIsLoggedIn} from "~/reducer/user/selectors";

function Header(props) {
  let {
    headerTitle,
    withAuth = false,
    user,
    isLoggedIn,
  } = props;
  return <>
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {headerTitle && <h1 className="page-title user-page__title">{headerTitle}</h1>}
      {withAuth && isLoggedIn && (
        <div className="user-block">
          <div className="user-block__avatar">
            <img src={user.avatar_url} alt={user.name} width="63" height="63"/>
          </div>
        </div>
      )}
      {withAuth && !isLoggedIn && (
        <div className="user-block">
          <a href="sign-in.html" className="user-block__link">Sign in</a>
        </div>
      )}
    </header>
  </>;
}

Header.propTypes = {
  headerTitle: PropTypes.string,
  withAuth: PropTypes.bool,
  user: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  isLoggedIn: getUserIsLoggedIn(state),
});

export default connect(mapStateToProps)(Header);
