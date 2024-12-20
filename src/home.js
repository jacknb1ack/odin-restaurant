export const homeDisplay = () => {
  const main = document.querySelector("main");

  const container = document.createElement("div");
  container.classList.add("content", "active");

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-content");

  const title = document.createElement("h2");
  title.innerHTML = "30 Years of Preserving Javanese Cuisine";

  const text = document.createElement("p");
  text.innerHTML = "With the vision of preserving Indonesian culture, especially traditional Javanese food, we are committed to continuously developing the quality of our products through excellent service.";

  homeContainer.append(title, text);
  container.append(homeContainer);
  main.append(container);
};
