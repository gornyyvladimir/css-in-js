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
    animationDurationCssInJs: 5000,
    animationDurationCssInput: '5000',
    animationDurationCssInJsInput: '5000',
    inputValue: '',
    backgroundColor: '#27ae60',
  }

  handleClickCss = (milliseconds) => {
    if(this.state.animatedCss)
      return;
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
    if(this.state.animatedCssInJs)
      return;
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

  handleChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  handleButtonClick = (e) => {
    this.setState({backgroundColor: this.state.inputValue});
  }

  handleChangeDurationCss = (e) => {
    this.setState({animationDurationCssInput: e.target.value});
  }

  handleClickDurationCss = () => {
    this.setState({animationDurationCss: +this.state.animationDurationCssInput});
  }

  handleChangeDurationCssInJs = (e) => {
    this.setState({animationDurationCssInJsInput: e.target.value});
  }

  handleClickDurationCssInJs = () => {
    this.setState({animationDurationCssInJs: +this.state.animationDurationCssInJsInput});
  }

  render() {
    return (
      <div style={{padding: '20px'}}>
        <p>{`Animated CSS: ${this.state.animatedCss}`}</p>
        <p>{`Timer CSS: ${this.state.timerCss} seconds`}</p>
        <div style={{margin: '1rem 0'}}>
          <input type="text" placeholder="Animation duration" value={this.state.animationDurationCssInput} onChange={this.handleChangeDurationCss}/>
          <button type="button" onClick={this.handleClickDurationCss}>Change</button>
        </div>
        <BoxCss
          click={this.handleClickCss}
          animated={this.state.animatedCss}
          duration={this.state.animationDurationCss}
        >CSS
        </BoxCss>
        <p>{`Animated CSS in JS: ${this.state.animatedCssInJs}`}</p>
        <p>{`Timer CSS in JS: ${this.state.timerCssInJs} seconds`}</p>
        <div style={{margin: '1rem 0'}}>
          <input type="text" placeholder="Animation duration" value={this.state.animationDurationCssInJsInput} onChange={this.handleChangeDurationCssInJs}/>
          <button type="button" onClick={this.handleClickDurationCssInJs}>Change</button>
        </div>
        <p>Change color:</p>
        <div style={{margin: '1rem 0'}}>
          <input type="text" placeholder="color" value={this.state.inputValue} onChange={this.handleChange}/>
          <button type="button" onClick={this.handleButtonClick}>Change</button>
        </div>
        <BoxCssInJs
          click={this.handleClickCssInJs}
          animated={this.state.animatedCssInJs}
          duration={this.state.animationDurationCssInJs}
          backgroundColor={this.state.backgroundColor}
        >Css in Js
        </BoxCssInJs>
      </div>
    );
  }
}

export default BoxAnimation;
