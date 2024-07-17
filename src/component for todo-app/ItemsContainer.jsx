import TodoItem from "./TodoItem";
import styles from './ItemsContainer.module.css';
const ItemsContainer=({todoItems,onDeleteClick} )=>
  {
    return( <div  className={styles.itemscontainer}>
        {todoItems.map((item)=>
        ( <TodoItem   todoDate={item.duedate}todoName={item.name} onDeleteClick={onDeleteClick}></TodoItem>
        )
        )}
    
      </div>);
};
export default ItemsContainer;