/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Card = ({ recipe, handleWantToCook }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, img, name, title, time, calories, ingredients } = recipe;
  // console.log(recipe);
  return (
    <div>
      <div className="card shadow-xl">
        <figure className="h-60">
          <img
          className="h-full w-full rounded-2xl object-cover"
            src={img}
            alt="recipes imgae"
          />
        </figure>
        <div className="mt-6  p-4 ">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="mt-4 text-base text-gray-600">{title}</p>
          <h3 className="font-medium mt-7 mb-4">Ingredients: 3</h3>
          <ul className="ml-6 opacity-70">
            {
                ingredients.map((item, idx) => <li className="list-disc" key={idx}>{item}</li>)
            }
          </ul>
          <div className="mt-6 flex justify-between items-center opacity-70">
            <div className="flex items-center gap-2"><i className="fa-regular fa-clock"></i><p>Time</p></div>
            <div className="flex items-center gap-2"><i className="fa-solid fa-fire-flame-curved"></i><p>Calories</p></div>
          </div>
          <button
          onClick={()=> handleWantToCook(recipe)}
           className="my-7 btn primary-btn">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Card;
