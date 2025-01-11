
const Nav = () => {
    return (
        <div className="my-12 container mx-auto flex justify-between items-center">
            <h2 className="text-4xl font-bold">Recipe Calories</h2>
            {/* nav items */}
            <div className="flex items-center gap-12">
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>
            <h1><i className="text-4xl fa-solid fa-user"></i></h1>
        </div>
    );
};

export default Nav;