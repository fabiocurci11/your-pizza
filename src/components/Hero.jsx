import Button from "../ui-component/Button";

const Hero = () => {

    return (
        <>
            <section>

                <div
                    className="w-full bg-center bg-cover h-[92vh]"
                    style={{
                        backgroundImage: `url('src/assets/hero-pizza.png')`,
                    }}
                >
                    <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                        <div className="text-center flex flex-col gap-2">
                            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                                Build your new <span className="text-blue-400">Saas</span> Project
                            </h1>
                            <div >
                                <Button>iuhuih</Button>
                            </div>
                            {/*
                            <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                Start project
                            </button>
                            */}
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Hero;