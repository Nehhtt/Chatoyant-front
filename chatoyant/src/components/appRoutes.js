/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-console */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthState } from '../context';

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
  const userDetails = useAuthState();
  console.log(userDetails.token);
  return (
    <Route
      path={path}
      render={(props) =>
        isPrivate && !userDetails.token ? (
          <Redirect to={{ pathname: '/' }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};

AppRoutes.propTypes = {
  component: PropTypes.object,
  path: PropTypes.string,
  isPrivate: PropTypes.bool,
};

export default AppRoutes;
