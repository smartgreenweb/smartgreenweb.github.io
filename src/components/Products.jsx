import React from "react";
import PageSection from "./PageSection";

import { FaRocket, FaSatellite, FaRobot, FaMicrochip, FaFish } from "react-icons/fa";
import { MdOutlineEscalatorWarning, MdWater } from "react-icons/md"
import { GoMilestone } from "react-icons/go"

const Products = () => {
  const products = [
    {
      id: 1,
      icon: <FaFish size={50} className="text-white" />,
      title: "Sustainable Aquaculture",
      subtitle:
        "Striving to usher in a new world that is green and sustainable.",
    },
    {
      id: 2,
      icon: <MdOutlineEscalatorWarning size={50} className="text-white" />,
      title: "Scalability",
      subtitle:
        "Empowering local communities with scalable infrastructure for production.",
    },
    {
      id: 3,
      icon: <MdWater size={50} className="text-white" />,
      title: "Recirculating Aquaculture System",
      subtitle:
        "A high density culturing of premium seafood.",
    },
    {
      id: 4,
      icon: <GoMilestone size={50} className="text-white" />,
      title: "Zero food-mile initiative",
      subtitle:
        "Reduction of farm to plate interval.",
    },
  ];

  return (
    <PageSection
      name="products"
      title="Projects"
      subtitle={`Undertaking a technology-first approach to revamp the current Indian seafood marketplace`}
      className={`font-neuereg`}
    >
      <div className="grid gap-12 text-black lg:grid-cols-2">
        {products.map(({ id, icon, title, subtitle }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-8 text-center rounded-lg group bg-gradient-to-r from-thOrange to-thBlue"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="p-5 m-4 bg-black rounded-full">{icon}</div>
            </div>
            <h1 className="my-8 text-3xl capitalize lg:text-5xl font-neuereg">{title}</h1>
            <p className="text-lg font-worksans">{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Products;
