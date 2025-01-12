
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import Recipes from './components/Recipes/Recipes'
import Sidber from './components/Sidber/Sidber'

function App() {
  const [recipes, setRecipes] = useState([])


  useEffect(()=> {
    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  }, [])

  return (
    <>

      <Nav></Nav>
      <Banner></Banner>

      <div className='p-2 lg:p-0 lg:flex lg:flex-row flex-col gap-6 container mx-auto mt-7 lg:mt-10'>
      <Recipes
      recipes={recipes}
      ></Recipes>

      <Sidber></Sidber>
      </div>
     
    </>
  )
}

export default App
