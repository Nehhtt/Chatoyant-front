/* eslint-disable no-console */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthState } from '../context';

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
  const userDetails = useAuthState();
  console.log('====', !userDetails.token, isPrivate, path);
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

export default AppRoutes;
