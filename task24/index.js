import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as Button from "./button";
class Random extends React.Component {
  color = {};
  constructor(props) {
    super(props);
    this.state = { color: [255, 180, 95] };
    this.handleClick = this.handleClick.bind(this);
  }
  color: [255, 255, 255];
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return "rgb(" + ary.join(", ") + ")";
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }
  handleClick() {
    this.setState({ color: this.chooseColor() });
  }
  render() {
    return (
      <div>
        <h1 className={this.isLight() ? "white" : "black"}>
          Your color is {this.formatColor(this.state.color)}
          <button light={this.isLight()} onClick={this.handleClick}>
            Click here
          </button>
        </h1>
      </div>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Random />
  </React.StrictMode>,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
