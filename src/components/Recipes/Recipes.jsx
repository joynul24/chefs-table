import PropTypes from 'prop-types';
import Card from './Card/Card';

const Recipes = ({recipes}) => {
    return (
        <div className="md:w-2/3 container mx-auto">
            <h1 className="text-xl lg:text-3xl font-bold">Recipes {recipes.length}</h1>

           <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-8'>
             {
                recipes.map(recipe => <Card key={recipe.id} recipe={recipe}></Card>)
             }
           </div>

        </div>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
}

export default Recipes;