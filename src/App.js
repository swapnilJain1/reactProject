import React, { useState } from "react";

const App = () => {
  const [todo, setToDo] = useState("");
  const [lists, setLists] = useState([]);
const handleAddToList = (event) => {
    event.preventDefault()
    setLists((oldList) => [...oldList, todo]);
    setToDo("");
  };
  const changeHandler = (event) => {
    setToDo(event.target.value);
  };
  return (
    <div>
      <form>
      <input type="text" value={todo} onChange={changeHandler} />
      <button  onClick={(e) => handleAddToList(e)}>Add to list</button>
      </form>
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
