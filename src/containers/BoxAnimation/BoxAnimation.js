import React, { Component } from 'react';
import BoxCss from '../../components/BoxCss/BoxCss';
import BoxCssInJs from '../../components/BoxCssInJs/BoxCssInJs';

class BoxAnimation extends Component {

  state = {
    animatedCss: false,
    animatedCssInJs: false,
    timerCss: 0,
    timerCssInJs: 0,
    animationDurationCss: 5000,
    animationDurationCssInJs: 10000,
  }

  handleClickCss = (milliseconds) => {
    this.setState({animatedCss: true});
    const timer = setInterval(() => {
      this.setState((prevState) => ({
        timerCss: prevState.timerCss + 1,
      }));
    },1000);

    setTimeout(() => {
      this.setState({
        animatedCss: false,
        timerCss: 0,
      })
      clearInterval(timer);
    },milliseconds);
  }

  handleClickCssInJs = (milliseconds) => {
    this.setState({animatedCssInJs: true});
    const timer = setInterval(() => {
      this.setState((prevState) => ({
        timerCssInJs: prevState.timerCssInJs + 1,
      }));
    },1000);

    setTimeout(() => {
      this.setState({
        animatedCssInJs: false,
        timerCssInJs: 0,
      })
      clearInterval(timer);
    },milliseconds);
  }

  render() {
    return (
      <div style={{padding: '20px'}}>
        <p>{`Animated CSS: ${this.state.animatedCss}`}</p>
        <p>{`Timer CSS: ${this.state.timerCss} seconds`}</p>
        <BoxCss
          click={this.handleClickCss}
          animated={this.state.animatedCss}
          duration={this.state.animationDurationCss}
        >CSS
        </BoxCss>
        <p>{`Animated CSS in JS: ${this.state.animatedCssInJs}`}</p>
        <p>{`Timer CSS in JS: ${this.state.timerCssInJs} seconds`}</p>
        <BoxCssInJs
          click={this.handleClickCssInJs}
          animated={this.state.animatedCssInJs}
          duration={this.state.animationDurationCssInJs}
        >Css in Js
        </BoxCssInJs>
      </div>
    );
  }
}

export default BoxAnimation;
