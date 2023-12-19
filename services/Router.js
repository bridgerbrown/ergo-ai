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
        let currentPage = document.querySelector("main").firstElementChild; 
        if (currentPage) {
            let fadeOut = currentPage.animate([
                {opacity: 1}, {opacity: 0}
            ],{ duration: 200});
            fadeOut.addEventListener("finish", () => {
                currentPage.remove();
                document.querySelector("main").appendChild(pageElement);
                let fadeIn = pageElement.animate([
                    {opacity: 0}, {opacity: 1}
                ],{ duration: 200});
            });
        } else {
            document.querySelector("main").appendChild(pageElement);
        }
    }
    window.scrollX = 0;
  }
}
export default Router;
