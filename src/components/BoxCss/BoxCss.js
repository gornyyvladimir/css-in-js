import React from 'react';
import PropTypes from 'prop-types';
import './BoxCss.css';

const BoxCss = (props) => {
  const classes = props.animated ? "BoxCss BoxCss--animated" : "BoxCss";
  return(
    <div
      className={classes}
      onClick={() => props.click(props.duration)}
    >CSS
    </div>
  );
};

BoxCss.propTypes = {
  animated: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired
};

export default BoxCss;
