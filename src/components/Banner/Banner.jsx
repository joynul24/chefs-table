
const Banner = () => {
    return (
        <div className="mt-10 lg:mt-20 px-3 lg:px-0">
            <div className="py-20 px-4 lg:px-0 lg:py-36 bg-[url(https://joynul2024.sirv.com/banner_picture/recipes_banner.png)] bg-cover rounded-3xl bg-center text-white container mx-auto text-center space-y-6">
            <h1 className="text-3xl lg:text-6xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className="text-base opacity-70">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex flex-col lg:flex-row gap-7 justify-center">
                <button className="btn primary-btn">Explore Now</button>
                <button className="btn primary-btn">Our Feedback</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;