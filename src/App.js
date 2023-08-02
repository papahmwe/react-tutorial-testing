import React from "react";

// const App = (porps) => {
//   return <Blog />;
// };

// const Blog = (porps) => {
//   return <Data />;
// };

// const Data = (porps) => {
//   const value = React.useContext(MyContext);
//   return <h1>{value}</h1>;
// };

const MyContext = React.createContext("Hi React");

class Title extends React.Component {
  static contextType = MyContext;
  render() {
    return <h1>{this.context} </h1>;
  }
}

class Header extends React.Component {
  render() {
    return <Title />;
  }
}

class App extends React.Component {
  render() {
    return <Header />;
  }
}

export default App;
