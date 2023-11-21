const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const url = link.href;
        Router.go(url);
      });
    })
    window.addEventListener("popstate", event => {
      Router.go(event.state.route, false);
    })
    Router.go(location.pathname);
  },
  go: (route, addToHistory=true) => {
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("home-page");
        break;
      case "/about":
        pageElement = document.createElement("about-page");
        break;
      default:
        if (route.startsWith("/user/")) {
          pageElement = document.createElement("user-page");
          pageElement.dataset.id = route.substring(route.lastIndexOf("-") + 1);
        }
        break;
    }
    if (pageElement) {
      const cache = document.querySelector("main");
      cache.children[0].remove();
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  }
}
export default Router;
