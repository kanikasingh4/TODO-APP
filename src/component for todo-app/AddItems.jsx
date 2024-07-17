import { useState } from "react";


function AddTodo ({onNewItem})  {

 const[ todoName, settodoName]=useState();
 const[ todoDate, settodoDate]=useState();
 const handleNameChange =(event)=>{
settodoName(event.target.value);
 }

 const handleDateChange =(event)=>{
  settodoDate(event.target.value);
 }

const handleAtButtonClicked =()=>{
onNewItem(todoName,todoDate);
settodoName("");
settodoDate("");
}
  return (
    <div className="container ">

    <div  className="row newrow">
      <div  className="col-6">
        <input type="text"placeholder="Enter todo here"value={todoName}onChange={ handleNameChange}/>
        </div>
      <div  className="col-4">
        <input type="date"value={todoDate} onChange={ handleDateChange}/>
        </div>
      <div  className="col-1"><button type="button" class="btn btn-success newbtn" onClick={handleAtButtonClicked}>Add</button></div>
    </div></div>
  );
};

export default  AddTodo;