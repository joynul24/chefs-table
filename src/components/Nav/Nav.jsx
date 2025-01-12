
const Nav = () => {
    return (
        <div className="p-5 lg:p-0 mt-10 container mx-auto lg:flex  justify-between  items-center">
            <div><h2 className="text-2xl lg:text-4xl font-bold text-center lg:text-left">Recipe Calories</h2></div>
            {/* nav items */}
            <div className="mt-5 justify-around lg:mt-0 flex items-center gap-12 opacity-70 cursor-pointer">
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>
            <div className="flex justify-center mt-5 lg:mt-0">
            <h1><i className="p-3 rounded-full bg-[#0BE58A]  text-4xl fa-solid fa-user"></i></h1>
            </div>
        </div>
    );
};

export default Nav;