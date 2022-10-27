import React from "react";

import codeImage from "../assets/code.png";
import PageSection from "./PageSection";

const DevApi = () => {
  return (
    <PageSection
      name="developer API"
      title="RAS Technology"
      subtitle={`A breakthrough in sustainable aquaculture`}
    >
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row font-worksans">
        {/* left */}

        <div className="flex flex-col w-full gap-4 p-8 bg-gray-900 rounded-lg lg:w-1/2">
          <p className="pl-4 border-l-4 odd:border-thOrange even:border-niagra">
            Exponential increase in produce with minimal water consumption.
          </p>
          <p className="pl-4 border-l-4 odd:border-thOrange even:border-niagra">
            A fully location-agnostic technology.
          </p>
          <p className="pl-4 border-l-4 odd:border-thOrange even:border-niagra">
            A premium quality produce guaranteed.
          </p>
          <p className="pl-4 border-l-4 odd:border-thOrange even:border-niagra">
            A green and bio-secure product delievered directly to the customer.
          </p>
        </div>
        {/* right */}
        <div className="w-full duration-300 lg:w-1/2 lg:rotate-6 hover:rotate-0">
          <img
            src={codeImage}
            style={{ width: "500px" }}
            alt="code"
            className="rounded-lg shadow-lg shadow-niagra"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default DevApi;
