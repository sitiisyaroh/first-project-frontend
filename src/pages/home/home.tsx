import React from "react";
import potrait from "../../assets/foto1.jpg";
import Card from "../../components/card/card";

const Home: React.FC = () => {
  return (
    <div>
      <section className="flex flex-row justify-center px-6 md:px-16 py-10 gap-14">
        <div className="flex flex-col justify-center">
          <h1 className="font-semibold text-xl md:text-5xl uppercase">
            Welcome to <br /> my portfolio
          </h1>
          <p className="text-base py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
        </div>
        <img
          src={potrait}
          alt="potrait"
          className="w-[170px] h-[250px] md:w-[300px] md:h-[500px] object-cover rounded-tl-[50px] rounded-tr-[20px] rounded-bl-[90px] rounded-br-[5px]"
        />
      </section>

      <section className="flex flex-col">
        <h1 className="font-semibold text-xl md:text-5xl text-center">
          My Projects
        </h1>

        <div className="flex flex-row gap-5 p-6 md:p-16">
          <div className="flex-1">
            <Card
              imgSrc={potrait}
              title="LoremIpsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="flex-1">
            <Card
              imgSrc={potrait}
              title="LoremIpsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="flex-1">
            <Card
              imgSrc={potrait}
              title="LoremIpsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
