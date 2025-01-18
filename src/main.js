import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const myproject_images = [
  "./myprojectdrawings/Corpse Assignment lol.png",
  "./myprojectdrawings/Corpse Assignment lol.png",
  "./myprojectdrawings/Corpse Assignment lol.png",
  "./myprojectdrawings/Corpse Assignment lol.png",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Cadavre Exquis
        <div class="three-model">
          <img src="./myprojectdrawings/Corpse assignment jan 17 version.png" />
        </div>
        <div id="images-description">
          <h4 id="description"> change description here </h4>
        </div>
      </div>

      

      
    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li style="display:none">LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li style="display:none">GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene("#model1", "/Corpse assignment jan 17 version.png");
createThreeScene("#model2", "/Corpse assignment jan 17 version.png");
createThreeScene("#model3", "/Corpse assignment jan 17 version.png");
