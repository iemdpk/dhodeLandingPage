import uniqueId from "lodash/uniqueId";

export const footerData = {
  products: [
    {
      id: uniqueId(),
      name: "Wash & Fold",
      href:"wash-and-fold",
    },
    {
      id: uniqueId(),
      name: "Dry Cleaning",
      href:"dry-cleaning",
    },
    {
      id: uniqueId(),
      name: "Ironing",
      href:"Ironing",
    },
    // {
    //   id: uniqueId(),
    //   name: "Subscriptions",
    //   href:"wash-and-fold",
    // },
  ],
  resources: [
    // {
    //   id: uniqueId(),
    //   name: "Pricing",
      
    // },
    {
      id: uniqueId(),
      name: "FAQs",
      href:"/faq"
    },
    {
      id: uniqueId(),
      name: "Contact Us",
      href:"/Contact"
    },
  ],
  company: [
    {
      id: uniqueId(),
      name: "About Us",
      href:"/about"
    },
    {
      id: uniqueId(),
      name: "Terms & condition",
      href:"/t&c.html"
    },
    {
      id: uniqueId(),
      name: "Privacy & Policy",
      href:"/privacy%20policy%20dhode.html"
    },
  ],
};
