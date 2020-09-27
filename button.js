import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.light ? "light-button" : "dark-button"}
        onClick={this.handleClick.bind(this)}
      >
        Refresh
      </button>
    );
  }
}
export default Button;
