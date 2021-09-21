import React from "react";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 1,
    };
    this.clickFnc = this.clickFnc.bind(this);
    this.clickFnc2 = this.clickFnc2.bind(this);
  }

  clickFnc() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  clickFnc2() {
    this.setState((prevState) => {
      return {
        count2: prevState.count2 * 2,
      };
    });
  }
  render() {
    return (
      <div className="showingBlock">
        <div className="increasingBlock">
          <p>Increase 1</p>
          <h1>{this.state.count}</h1>
          <button onClick={this.clickFnc}>Change</button>
        </div>
        <div className="doubleBlock">
          <p>Double the value</p>
          <h1>{this.state.count2}</h1>
          <button onClick={this.clickFnc2}>Change</button>
        </div>
      </div>
    );
  }
}

export default App;
