import React from "react";
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const WithPropsRoute = ({component, ...rest}) => {
  return (
    <Route {...rest} render={(routeProps) => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
};

WithPropsRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default WithPropsRoute;
