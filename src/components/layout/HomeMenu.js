import Image from "next/image";
import React from "react";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

function HomeMenu() {
  return (
    <section className="my-16">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] -z-10">
          <Image
            width={109}
            height={189}
            src={"/images/sallad1.png"}
            alt="sallad"
          />
        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
          <Image
            width={107}
            height={195}
            src={"/images/sallad2.png"}
            alt="sallad"
          />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeader
          subHeader={"check out"}
          mainHeader={"Our Best Sellers"}
        />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}

export default HomeMenu;
