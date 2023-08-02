import React from "react";

class AddMore extends React.Component {
  render() {
    return <li>{this.props.list}</li>;
  }
}

class AddForm extends React.Component {
  listRef = React.createRef();

  adding = () => {
    let list = this.listRef.current.value;

    this.props.add(list);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.listRef} />
        <br />
        <button onClick={this.adding}>Add</button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    lists: [
      { id: 1, list: "to wake up" },
      { id: 2, list: "to take a bath" },
    ],
  };

  add = (list) => {
    console.log(list);
    let id = this.state.lists.length + 1;

    this.setState({
      lists: [...this.state.lists, { id, list }],
    });
  };

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <AddForm add={this.add} />
        <ol>
          {this.state.lists.map((listItems) => {
            return <AddMore key={listItems.id} list={listItems.list} />;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
