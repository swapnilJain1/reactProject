import React, { useState } from "react";

const App = () => {
  const [todo, setToDo] = useState("");
  const [lists, setLists] = useState([]);

  const handleAddToList = () => {
    setLists((oldList) => [...oldList, todo]);
    setToDo("");
  };
  const changeHandler = (event) => {
    setToDo(event.target.value);
  };
  return (
    <div>
      <input type="text" value={todo} onChange={changeHandler} />
      <button onClick={handleAddToList}>Add to list</button>

      <ul>
        {lists.map((list, index) => (
          <div key={index}>
            <li>{list}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
