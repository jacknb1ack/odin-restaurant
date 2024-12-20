export const contactDisplay = () => {
  const main = document.querySelector("main");

  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contact-content");
  contactContainer.classList.add("content");

  const title = document.createElement("h2");
  title.innerHTML = "Contact Us";

  const address = document.createElement("p");
  address.innerHTML = "Jl. Jalan Raya No 12, Desa, Kecamatan, Kabupaten, Indonesia";

  const phone = document.createElement("p");
  phone.innerHTML = "+6221-123456";

  contactContainer.append(title, address, phone);
  main.append(contactContainer);
};
