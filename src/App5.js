import React from "react";
import { createContext } from "react";

const MyContext = createContext();

const App = (porps) => {
  return (
    <MyContext.Provider value="Hello React">
      <Blog />
    </MyContext.Provider>
  );
};

const Blog = (porps) => {
  return <Data />;
};

const Data = (porps) => {
  return <MyContext.Consumer>{(value) => <h1>{value}</h1>}</MyContext.Consumer>;
};

export default App;
