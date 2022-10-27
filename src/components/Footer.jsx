import React from "react";

const Footer = () => {
  const menu = [
    {
      id: 1,
      title: "Company",
      subMenu: [
        {
          id: 1,
          title: "Submenu 1",
        },
        {
          id: 2,
          title: "Submenu 2",
        },
        {
          id: 3,
          title: "Submenu 3",
        },
      ],
    },
    {
      id: 2,
      title: "Support",
      subMenu: [
        {
          id: 1,
          title: "Apple 1",
          link: "https://apple.com",
        },
        {
          id: 2,
          title: "Apple 2",
        },
        {
          id: 3,
          title: "Apple 3",
        },
      ],
    },
    {
      id: 3,
      title: "Developer API",
      subMenu: [
        {
          id: 1,
          title: "Grape 1",
        },
        {
          id: 2,
          title: "Grape 2",
        },
        {
          id: 3,
          title: "Grape 3",
        },
      ],
    },
    {
      id: 4,
      title: "Stuff",
      subMenu: [
        {
          id: 1,
          title: "Stuff 1",
        },
        {
          id: 2,
          title: "Stuff 2",
        },
        {
          id: 3,
          title: "Stuff 3",
        },
      ],
    },
  ];

  return (
    <div className="border-t border-slate-300">
      <p className="my-12 text-sm text-center text-slate-300">
        © Copyright Smart Green Aquaculture Pvt. Ltd.
      </p>
    </div>
  );
};

export default Footer;
