import React, { createRef, useState } from "react";
import User from "./User";

const App = () => {
  let [users, setUsers] = useState([
    { id: 1, name: "Ko Ko", age: 23 },
    { id: 2, name: "Nyi Lay", age: 20 },
  ]);

  let nameRef = createRef();
  let ageRef = createRef();

  let addMore = (e) => {
    e.preventDefault();
    let id = users.length + 1;
    let name = nameRef.current.value;
    let age = ageRef.current.value;

    setUsers([...users, { id, name, age }]);
  };

  return (
    <div>
      <form onSubmit={addMore}>
        <input type="text" ref={nameRef} />
        <br />
        <input type="number" ref={ageRef} />
        <br />
        <button type="submit">Add More</button>
      </form>
      <ul>
        {users.map((data) => (
          <User key={data.id} name={data.name} age={data.age} />
        ))}
      </ul>
    </div>
  );
};

export default App;
