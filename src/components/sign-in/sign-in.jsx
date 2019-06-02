import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getLoginError} from "~/reducer/user/selectors";
import {Operation} from "~/reducer/user/user";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: ``,
      password: ``,
    };
    this._onSubmitForm = this._onSubmitForm.bind(this);
    this._handleChangeEmail = this._handleChangeEmail.bind(this);
    this._handleChangePassword = this._handleChangePassword.bind(this);
  }
  _onSubmitForm(event) {
    event.preventDefault();
    this.props.login(this.state);
  }
  _handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  _handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  render() {
    return <>
      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={this._onSubmitForm}>
          {this.props.loginError && (
            <div className="sign-in__message">
              {this.props.loginError}
            </div>
          )}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" onChange={this._handleChangeEmail}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" onChange={this._handleChangePassword}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </>;
  }
}

SignIn.propTypes = {
  loginError: PropTypes.string,
  login: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  loginError: getLoginError(state),
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(Operation.login(data)),
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
