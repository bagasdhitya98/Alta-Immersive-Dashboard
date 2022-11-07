import React from "react";
import Button from "components/Button";

const Landing = () => {

    const image = "https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png"
    const title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum consequat nisl vel pretium lectus quam id leo in. Fringilla urna porttitor rhoncus dolor purus non. Consequat nisl vel pretium lectus quam id leo in vitae."

    return (
        <div className="bg-black h-screen w-screen flex">
            <div className="flex items-center bg-alta-background h-screen w-1/2 hidden md:flex">
                <img className="xl:mx-40 lg:mx-20 md:mx-20 lg:w-1/3 lg:h-1/5 md:w-1/2 md:h-1/6" src={image} />
            </div>
            <div className="items-center bg-alta-space-cadet h-screen lg:w-1/2 md:w-1/2">
                <div className="xl:mt-80 xl:mx-40 lg:mx-20 lg:mt-96 md:mx-10 md:mt-96 sm:mx-10 mt-80 mx-10">
                    <p className="text-white text-justify font-inter">{title}</p>
                </div>
                <div className="xl:ml-60 lg:mx-40 lg:mt-10 md:mx-20 md:mt-10 sm:mx-20 sm:mt-10 mt-10 mx-28">
                    <Button
                        title="Login"
                        type="long"
                    />
                </div>
            </div>
        </div>
    )
};

export default Landing;