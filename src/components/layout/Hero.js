import Image from "next/image";
import React from "react";
import ArrowRight from "../icons/ArrowRight";

function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br />
          is better
          <br />
          with a&nbsp; <span className="text-primary">Pizza</span>
        </h1>
        <p className="text-gray-600 text-sm my-6">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex items-center gap-4 text-sm">
          <button className="px-4 py-2 bg-primary text-white flex items-center rounded-full gap-2 uppercase">
            Order now
          </button>
          <button className="text-gray-600 py-2 font-semibold flex items-center gap-2 px-4">
            Learn more <ArrowRight />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/images/pizza.png"}
          alt="pizza"
          layout={"fill"}
          objectFit={"contain"}
        ></Image>
      </div>
    </section>
  );
}

export default Hero;
