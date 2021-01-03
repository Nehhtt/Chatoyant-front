import React from 'react';
import PropTypes from 'prop-types';
import { Spinning } from 'grommet-controls';
import { Box } from 'grommet/components/Box';

const Loader = ({ color }) => (
  <Box
    flex={{ shrink: 1, grow: 0 }}
    align="center"
    margin="xxlarge"
    justify="center"
  >
    <Spinning color={color} />
  </Box>
);

Loader.propTypes = {
  color: PropTypes.string,
};

Loader.defaultProps = {
  color: 'accent-1',
};

export default Loader;
