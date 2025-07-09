import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessege from "./components/ErrorMessege";



function App() {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee",];
    let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee",];

  return (
    <>
    <h1  className="food-heading"> Heathy Food</h1>
  
    <ErrorMessege items={foodItems}></ErrorMessege>
    <FoodItems items={foodItems}></FoodItems>
   
  </>
  );
};
export default App;
