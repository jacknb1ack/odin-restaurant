export const homeDisplay = () => {
  const main = document.querySelector("main");

  const homeContainer = document.createElement("div");
  homeContainer.setAttribute("id", "home-content");
  homeContainer.classList.add("content");

  const title = document.createElement("h2");
  title.innerHTML = "30 Years of Preserving Javanese Cuisine";

  const text = document.createElement("p");
  text.innerHTML = "With the vision of preserving Indonesian culture, especially traditional Javanese food, we are committed to continuously developing the quality of our products through excellent service.";

  homeContainer.append(title, text);
  main.append(homeContainer);
};
