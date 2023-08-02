import React from "react";
import "./ToolBar.css";

class Toolbar extends React.Component {
  render() {
    let styles = {
      toolbar: {
        fontSize: 20,
        background: "red",
        color: "green",
      },
    };
    return (
      <div style={styles.toolbar}>
        {console.log(this.props.children)}
        {this.props.children}
      </div>
    );
  }
}

class Nav extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <h1>This is Class Component</h1>
        </Nav>

        <Toolbar>
          <h1>Hello React</h1>
          <h2>Component Composition</h2>
        </Toolbar>
      </div>
    );
  }
}

export default App;
