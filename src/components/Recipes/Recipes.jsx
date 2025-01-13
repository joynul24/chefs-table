/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Card from './Card/Card';

const Recipes = ({recipes,handleWantToCook}) => {
    return (
        <div className="md:w-2/3 container mx-auto">
          
           <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
             {
                recipes.map(recipe => <Card key={recipe.id} recipe={recipe} handleWantToCook={handleWantToCook}></Card>)
             }
           </div>

        </div>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
}

export default Recipes;