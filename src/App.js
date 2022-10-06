import React, { Component, Fragment } from "react";
//using element
//const e = <h1>Hello World</h1>;

//using component
class App extends Component {
  //render method important
  render() {
    //retrun react element
    return (
      <Fragment>
        <h1>Hello World</h1>
        <h1>Hello Hi</h1>
        <h2>React Fragment is retrun multiple elements</h2>
      </Fragment>
    );
  }
}

export default App;
