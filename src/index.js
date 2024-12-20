import "./styles.css";

import { homeDisplay } from "./home";
import { menuDisplay } from "./menu";
import { contactDisplay } from "./contact";

const display = [homeDisplay(), menuDisplay(), contactDisplay()];

const tabs = document.querySelectorAll(".nav-item");
const allContent = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("mouseover", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("mouseover");
    });
    tab.classList.add("mouseover");
  });

  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    allContent.forEach((content) => {
      content.classList.remove("active");
    });
    allContent[index].classList.add("active");
  });
});
