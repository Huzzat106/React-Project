import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo"; 
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";   
import "./App.css";


function app(){

  return (
   <center class='todo-container'>
    <div className="items-container">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItem1></TodoItem1>
    <TodoItem2></TodoItem2> 
    </div>
    <div class="container text-center"> 
</div>
  </center>
  );
}

export default app;