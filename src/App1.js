import React from "react";

class Item extends React.Component {
  render() {
    return (
      <li>
        {this.props.name}, ${this.props.price}
      </li>
    );
  }
}

class AddForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.props.add(name, price);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.nameRef} />
        <input type="text" ref={this.priceRef} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Apple", price: 20 },
      { id: 2, name: "Orange", price: 10 },
      { id: 3, name: "Grapes", price: 30 },
    ],
    // count: 0,
  };

  add = (name, price) => {
    console.log(name);
    let id = this.state.items.length + 1;

    this.setState({
      items: [...this.state.items, { id, name, price }],
    });

    // this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Fruits</h1>
        {/* <h1>{this.state.count}</h1> */}
        <AddForm addHandler={this.add} />
        <ol>
          {this.state.items.map((i) => {
            return <Item key={i.id} name={i.name} price={i.price} />;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
