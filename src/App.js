import './App.css';
import foods from "./foods.json"
import Foodbox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { useState } from 'react';

function App() {
  const [foodsArray, setFoodsArray] = useState(foods);
  const [foodsArraySearch, setFoodsArraySearch] = useState(foods);

  function addFood(newFood) {
    setFoodsArray([...foods, newFood])
  }

  function searchFilter(stringa) {
    let filteredArray
    console.log(stringa);
    if (stringa === " ") filteredArray = foodsArray

    else {
      filteredArray = foodsArraySearch.filter((food) => {
        return food.name.toLowerCase().includes(stringa.toLowerCase())
      })
    }
    setFoodsArray(filteredArray)
  }

  function deleteFoodById(id) {
    setFoodsArray(foodsArray.filter(food => food.name !== id))
  }

  function toggleForm(){
  
  }


  return (
    <div className="App">
      <Search searchFilter={searchFilter} />
      <AddFoodForm className="food-form" addFood={addFood} />
      <button>Show</button>
      <div className='foodbox-container'>
        {foodsArray.map((food) => {
          return (
            <Foodbox deleteFoodById={deleteFoodById} key={food.name} food={food} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
