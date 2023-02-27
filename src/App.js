import  { useState } from "react";

const App = () => {
  const [todo, setToDo] = useState("");
  const [lists, setLists] = useState([]);

const handleAddToList = (event) => {
    event.preventDefault()
    setLists((oldList) => [...oldList, todo]);
    setToDo("");
  };


  const handleDelete =(newList)=>{
    setLists(oldList => oldList.filter(list => list!==newList))
  }
  
   const handleKeyDown = (event) =>{
    if (event.key === 'Enter'){
      handleAddToList()
    }
  }

  return (
    <div className="App">
      <form>
      <input type="text" 
             value={todo} 
             onChange={(e)=>setToDo(e.target.value)}
             onKeyDown={handleKeyDown}
      />
      <button 
            onClick={(e) => handleAddToList(e)}>Add to List
      </button>
      </form>
      <ul>
        {lists.map((list, index )=> (
          <div key={index}>
            <li>
               {list}&nbsp; &nbsp; 
               <span onClick={()=>handleDelete(list)}>x</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
