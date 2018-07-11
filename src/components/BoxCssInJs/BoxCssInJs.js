import React from 'react';
import styled, {keyframes} from 'styled-components';
import PropTypes from 'prop-types';

const forwardBack = keyframes`
  0% {transform: translateX(0);}
  50% {transform: translateX(500px);}
  100% {transform: translateX(0);}
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  color: #ffffff;
  background: ${props => props.backgroundColor};
  text-align: center;
  animation: ${props => props.animated ? `${forwardBack} ${props.duration}ms` : 'none'};
`;

const BoxCssInJs = (props) => (
  <Box
    onClick={() => props.click(props.duration)}
    animated={props.animated}
    duration={props.duration}
    width={200}
    height={200}
    backgroundColor={props.backgroundColor}
  >Css in Js
  </Box>
);

BoxCssInJs.propTypes = {
  animated: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default BoxCssInJs;
