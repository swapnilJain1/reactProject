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
  const handleDelete =(newList)=>{
    setLists(oldList => oldList.filter(list => list!==newList))
  }
  return (
    <div className="App">
      <form>
      <input type="text" 
             value={todo} 
             onChange={(e)=>setTodo(e.target.value)}
      />
      <button 
            onClick={(e) => handleClick(e)}>Add to List
      </button>
      </form>
      <ul>
        {lists.map((list, index )=> (
          <div key={index}>
            <li>
               {list}&nbsp; &nbsp; 
               <span onClick={()=>handleDelete(list)}>❌</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
