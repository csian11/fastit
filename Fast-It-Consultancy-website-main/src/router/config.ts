const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/services",
    component: "Services", // This should match the component name in your pages directory
    exact: true,
  },
  {
    path: "/about",
    component: "AboutUs",
    exact: true,
  },
  // {
  //   path: "/contact",
  //   component: "Contact", // This should match the component name in your pages directory
  //   exact: true,
  // },
  // {
  //   path: "/services",
  //   component: "Services", // This should match the component name in your pages directory
  //   exact: true,
  // },
];

export default routes;
