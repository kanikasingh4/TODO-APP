function TodoItem ({ todoName,todoDate,onDeleteClick}) {


  return (
    <div class="container">
      <div class="row ">
        <div class="col-6 createdrow">{todoName}</div>
        <div class="col-4 createdrow">{todoDate}</div>
        <div class="col-1">
          <button type="button" class="btn btn-danger  newbtn deletebtn" onClick={()=>onDeleteClick(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;


