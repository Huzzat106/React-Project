function AddTodo(){
 return (
 <div class="container text-center">
  <div class="row kg-row">
    <div class="col-6"> <input type="text" placeholder="Enter todo here "></input>
      </div>
    <div class="col-4"> <input type="date"></input>
      </div>
    <div class="col-2">
      <button type="button kg-button" class="btn btn-success">Add</button>
    </div>
  </div>
  </div>
);

}


export default AddTodo;