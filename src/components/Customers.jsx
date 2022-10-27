import React from "react";
import PageSection from "./PageSection";

const Customers = () => {
  const facts = [
    {
      id: 1,
      title: "1000x",
      subtitle: "Increase in produce",
    },
    {
      id: 2,
      title: "4%",
      subtitle: "Water consumption.",
    },
    {
      id: 3,
      title: "100%",
      subtitle: "Of quality and produce.",
    },
    {
      id: 4,
      title: "7%",
      subtitle: "Annual growth.",
    },
  ];



  return (
    <PageSection
      name="customers"
      title="Promises"
      subtitle={`Smart Green Aquaculture promises to deliver`}
    >
      <>
        <div className="grid gap-8 mb-16 text-left lg:grid-cols-4">
          {facts.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="p-4 text-black rounded-lg odd:bg-niagra even:bg-thOrange"
            >
              <h1 className="mb-2 text-4xl font-bold font-neuereg">{title}</h1>
              <p className="font-worksans">{subtitle}</p>
            </div>
          ))}
        </div>


      </>
    </PageSection>
  );
};

export default Customers;
