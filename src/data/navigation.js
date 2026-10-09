export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    hasDropdown: true,
    sublinks: [
      {
        category: "Trade Finance",
        items: [
          {
            label: "Domestic Trade Finance",
            path: "/services/domestic-trade-finance",
            description: "Inland LC discounting, invoice financing & factoring"
          },
          {
            label: "International Trade Finance",
            path: "/services/international-trade-finance",
            description: "Cross-border supplier's credit & export LC financing"
          }
        ]
      },
      {
        category: "Treasury & Syndication",
        items: [
          {
            label: "Forex & Treasury Consulting",
            path: "/services/forex-services",
            description: "Treasury audit, FTPO outsourcing & risk management policy"
          },
          {
            label: "Debt Syndication",
            path: "/services/debt-syndication",
            description: "Structured corporate loans & multi-lender syndication"
          }
        ]
      }
    ]
  },
  { label: "Contact Us", path: "/contact" }
];

// Mapping for historical .html links to maintain compatibility and prevent broken bookmarks
export const legacyRouteMap = {
  "/index.html": "/",
  "/about.html": "/about",
  "/domastictradefinance.html": "/services/domestic-trade-finance",
  "/domestictradefinance.html": "/services/domestic-trade-finance",
  "/internationaltradefinance.html": "/services/international-trade-finance",
  "/forexservices.html": "/services/forex-services",
  "/debtsyndication.html": "/services/debt-syndication",
  "/contact.html": "/contact",
  "/signup.html": "/contact"
};
