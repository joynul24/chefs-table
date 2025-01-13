/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const Sidber = ({ recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories }) => {

  return (
    <div className="md:w-1/3 container mx-auto mt-4 lg:mt-0">
      
      {/* want to cook table */}
      <h1 className="text-2xl font-semibold text-center">
        Want to cook: {recipeQueue.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {recipeQueue.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.name}</td>
                <td>{recipe.time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                  onClick={()=> 
                   {handleRemove(recipe.id)
                    calculateTimeAndCalories(recipe.time, recipe.calories)
                   }}
                   className="my-7 btn   primary-btn">
                  Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Currently cooking table */}
      <h1 className="mt-8 text-2xl font-semibold text-center">
      Currently cooking: {preparedRecipe.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {preparedRecipe.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.name}</td>
                <td>{recipe.time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
             <tr>
                <th></th>
                <td></td>
                <td>Total Time: {totalTime} Minutes</td>
                <td>Total Calories: {totalCalories} calories</td>
              </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Sidber;
