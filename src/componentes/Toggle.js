import React from "react";
import Clock from "./Clock";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    const isToggleOn = this.state.isToggleOn;
    let button;
    if(!isToggleOn){
      button = <Clock/>
    }
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Mostrar Hora" : "Ocultar Hora"}
        </button>
        {button}
      </div>
    );
  }
}

export default Toggle;
