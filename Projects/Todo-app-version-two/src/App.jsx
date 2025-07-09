import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo"; 
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";   
import "./App.css";
import TodoItem from "./components/TodoItem";

function app(){

  return (
   <center class='todo-container'>
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className="items-container">
     
    <TodoItem todoDate={'4/10/2023'} todoName={'Buy Milk'}></TodoItem>
    
    </div>
    <div class="container text-center"> 
</div>
  </center>
  );
}

export default app;