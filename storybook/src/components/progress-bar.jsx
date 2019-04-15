import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'semantic-ui-react';

const ProgressBar = ({ total, current, ...props }) => (
  <Progress
    className="progress-bar"
    total={total}
    value={current}
    autoSuccess
    {...props}
  />
);

ProgressBar.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default ProgressBar;
