let siteTitle = "SPA Demo";

const routes = {
  404: {
    page: "/pages/404.html",
    title: "404 | " + siteTitle,
  },
  "/": {
    page: "/pages/home.html",
    title: "home | " + siteTitle,
  },
  "/home": {
    page: "/pages/home.html",
    title: "home | " + siteTitle,
  },
  "/about": {
    page: "/pages/about.html",
    title: "about | " + siteTitle,
  },
  "/log": {
    page: "/pages/log.html",
    title: "log | " + siteTitle,
  },
  "/other": {
    page: "/pages/other.html",
    title: "other | " + siteTitle,
  },
};

const nav = document.querySelector("nav");

nav.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    e.preventDefault();
    window.history.pushState({}, "", e.target.href);
    renderPage();
  }
});

const renderPage = () => {
  const { pathname } = window.location;
  let route = null;

  if (pathname === "/index.html") {
    route = routes["/"];
  } else {
    route = routes[pathname] || routes[404];
  }
  fetch(route.page)
    .then((res) => res.text())
    .then((html) => {
      const root = document.querySelector("#root");
      root.innerHTML = html;
      document.title = route.title;
    });
};

window.onpopstate = renderPage;
renderPage();
