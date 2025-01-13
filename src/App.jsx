/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import Recipes from './components/Recipes/Recipes'
import Sidber from './components/Sidber/Sidber'

function App() {
  const [recipes, setRecipes] = useState([])
  const [recipeQueue, setRecipeQueue] = useState ([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalCalories, setTotalCalories] = useState(0)
  const [totalTime, setTotalTime] = useState(0)


  useEffect(()=> {
    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  }, [])

  const handleWantToCook = (recipe)=> {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.id === recipe.id);
    if(!isExist) {
      setRecipeQueue([...recipeQueue, recipe])
    }
    else{
      alert('Recipes already exists in the Queue.')
    }
  }

  
  const handleRemove = (id) => {
    // find wich recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.id === id);

    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.id !== id);
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);

  }


  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories);
  }


  return (
    <>

      <Nav></Nav>
      <Banner></Banner>

      <div className='p-2 lg:p-0 lg:flex lg:flex-row flex-col gap-6 container mx-auto mt-7 lg:mt-10'>
      <Recipes
      recipes={recipes}
      handleWantToCook={handleWantToCook}
      ></Recipes>

      <Sidber
      recipeQueue={recipeQueue}
      handleRemove={handleRemove}
      preparedRecipe={preparedRecipe}
      calculateTimeAndCalories={calculateTimeAndCalories}
      totalTime={totalTime}
      totalCalories={totalCalories}
      ></Sidber>
      </div>
     
    </>
  )
}

export default App
