/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button as GrommetButton } from 'grommet/components/Button';
import { Box } from 'grommet/components/Box';
import Loader from '../Loader/Loader';

const Button = ({ to, loading, ...rest }) => {
  if (to) {
    console.log(to);
    return (
      <Link to={to}>
        <GrommetButton
          focusIndicator={false}
          hoverIndicator={false}
          {...rest}
          disabled={loading || rest.disabled}
          icon={loading ? <Loader color={rest.textColor} /> : rest.icon}
          label={rest.label ? <Box>{rest.label}</Box> : undefined}
        />
      </Link>
    );
  }
  return (
    <GrommetButton
      focusIndicator={false}
      hoverIndicator={false}
      {...rest}
      disabled={loading || rest.disabled}
      icon={loading ? <Loader color={rest.textColor} /> : rest.icon}
      label={rest.label ? <Box>{rest.label}</Box> : undefined}
    />
  );
};

Button.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  loading: PropTypes.bool,
};

export default Button;