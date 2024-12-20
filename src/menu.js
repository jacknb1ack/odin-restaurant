import empal from "./img/empal-gentong.png";
import mie from "./img/mie-godok.png";
import rawon from "./img/rawon.png";
import selat from "./img/selat-solo.png";

const menuCard = (img, title, desc) => {
  return { img, title, desc };
};

export const menuDisplay = () => {
  const menus = [
    menuCard(empal, "Empal Gentong", "Empal gentong is a spicy Indonesian curry-like beef soup originating in Cirebon, West Java. It is a variety of the Soto cuisine and is similar to gulai which is usually cooked with firewood in a gentong stove."),
    menuCard(mie, "Mie Godog (Javanese Noodle)", "Mie jawa (lit. 'Java noodles'), also called as mi jawa or bakmi jawa in Indonesia, or mee Jawa in Malaysia is a traditional Javanese style noodle,commonly found in Indonesia and Malaysia. The dish is made of yellow noodle, chicken, vegetables, egg and spices. The recipe however, is slightly different between mie jawa in Indonesia and mee Jawa in Malaysia."),
    menuCard(rawon, "Rawon", "Rawon is a type of Indonesian beef soup from East Java. This dish has a history of more than 1,000 years and is known as a typical East Javanese food. It gets its dark color and nutty taste from the black keluak nut, which is the main spice used. The soup is made by mixing garlic, shallots, keluak, ginger, candlenut, turmeric, red chili, and salt, and cooking them in oil. This mixture is then added to boiled beef stock with pieces of beef."),
    menuCard(selat, "Selat Solo", "Selat solo or is a typical Solo, Central Javanese dish that is influenced by European cuisine. Although it has the name selat solo — which refers to 'salad', the main part is beef (usually outer tenderloin) making this dish not suitable to be called a salad, but rather as a steak served in a thin sweet sauce typical of Java. Some people call this dish a mix of steak, salad and soup.This dish is also often referred to as Javanese steak, although the dish contains less sauce."),
  ];

  const main = document.querySelector("main");

  const container = document.createElement("div");
  container.classList.add("content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-content");

  menus.forEach((e, index) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.setAttribute("id", `menu${index}`);

    const image = document.createElement("img");
    image.src = e.img;

    const title = document.createElement("h2");
    title.classList.add("menu-title");
    title.innerText = e.title;

    const desc = document.createElement("p");
    desc.classList.add("menu-desc");
    desc.innerText = e.desc;

    menuItem.append(image, title, desc);
    menuContainer.append(menuItem);
    container.append(menuContainer);
  });

  main.append(container);
};
