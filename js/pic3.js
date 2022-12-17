const section = document.createElement("section");
const header = document.createElement("h3");
const node = document.createTextNode("My New FAQ");
header.appendChild(node);
section.appendChild(header);
const accordionhomepage =
  document.getElementsByClassName("accordion-homepage")[0];
accordionhomepage.appendChild(section);
