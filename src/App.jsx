
import HEADING from "./component for todo-app/Header";
import  AddTodo from "./component for todo-app/AddItems";
import ItemsContainer from "./component for todo-app/ItemsContainer";
import './App.css';
import WelcomeMsg from "./component for todo-app/Welcomemsg";
import { useState } from "react";

function App() 
{




const [todoItems, setTodoItems]=useState([]);
const handleNewItems=(todoName,todoDate)=>{
  console.log(`New Item Added: ${todoName}Date:${todoDate}`);
  const newTodoItems=[...todoItems,{name:todoName, duedate:todoDate},];
  setTodoItems(newTodoItems);
};
const handleDeleteItem=(todoItemName)=>{
  const newTodoItems= todoItems.filter(item=>item.name!==todoItemName);
  setTodoItems( newTodoItems);

}

  return (
    <center className="todo-container">

      <HEADING />
      <AddTodo onNewItem={handleNewItems} ></AddTodo>
       {todoItems.length ===0 && <WelcomeMsg> </WelcomeMsg> }
      <ItemsContainer todoItems={ todoItems } onDeleteClick={handleDeleteItem}></ItemsContainer>
    </center>
  )
}

export default App;
