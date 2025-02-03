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
      <p id="lol">CADAVRE EXQUIS</p>
    </section>

    <section id="projects">
      <div id="project-row">
        <div class="three-model">

        </div>
        <div id="images-description">
          <h4 id="description"> In my approach to creating this work, I took into consideration my own worldview, and how the things that I observe around me are impacting the planet. I chose to approach three distinct and yet interconnected topics that interest me; food/resource security for the future, housing/how people live, and environmental tourism/preservation. I looked at each of these topics and further specified them to my own observations and experiences. It is easy to look at the state of the world right now and feel despair around the large and seemingly hopeless issues that we face. Looking locally at the Calgary area and the province of Alberta will help us to critically analyze our own impact, and place within global systems, allowing us to take appropriate steps towards a more sustainable future. I believe that we stand at a pivotal moment in history, and that the choices we make today will shape the world for generations to come. The future is no-doubt urban, although a large part of environmental stewardship extends beyond city limits. Through this work I aim to make connections between rural and urban contexts, placing emphasis on the ways we are all connected.   </h4>
       
          <div id="images">
          <a href="./myprojectdrawings/Corpse assignment good copy.png" target="_blank"><img src="./myprojectdrawings/Corpse assignment good copy.png"></a>
          <a href="./myprojectdrawings/313 project one 1.png" target="_blank"><img src="./myprojectdrawings/313 project one 1.png"></a>
          <a href="./myprojectdrawings/313 project one 2.png" target="_blank"><img src="./myprojectdrawings/313 project one 2.png"></a>
          <a href="./myprojectdrawings/313 project one 3.png" target="_blank"><img src="./myprojectdrawings/313 project one 3.png"></a>
          <a href="./myprojectdrawings/313 project one 4.png" target="_blank"><img src="./myprojectdrawings/313 project one 4.png"></a>
          <a href="./myprojectdrawings/313 project one 5.png" target="_blank"><img src="./myprojectdrawings/313 project one 5.png"></a>
          <a href="./myprojectdrawings/313 project one 6.png" target="_blank"><img src="./myprojectdrawings/313 project one 6.png"></a>
          <a href="./myprojectdrawings/313 project one 7.png" target="_blank"><img src="./myprojectdrawings/313 project one 7.png"></a></div>
        </div>
      </div>
    </section>

    <section id="assignment-2">
      <div>
        <h2>Assignment Two</h2>
        <p>name</p>
      </div>

      <div class="flex-container">
        <div class="box">
          <div id="model1"></div>
          <div>
            <a href="./myprojectdrawings/313 project two 1.png" target="_blank"><img class="image" src="./myprojectdrawings/313 project two 1.png" alt="PLS CHANGE"></a>
          </div>
        </div>
        <div class="box">
          <div id="model2"></div>
          <div>
            <a href="./myprojectdrawings/313 project two 2.png" target="_blank"><img class="image" src="./myprojectdrawings/313 project two 2.png" alt="PLS CHANGE"></a>
          </div>
        </div>
        <div class="box">
          <div id="model3"></div>
          <div>
            <a href="./myprojectdrawings/313 project two 3.png" target="_blank"><img class="image" src="./myprojectdrawings/313 project two 3.png" alt="PLS CHANGE"></a>
          </div>
        </div>
      </div>

      <p class="centered-text">Centered Reflection</p>

      <div class="image-container">
        <a href="./myprojectdrawings/313 project two 4.png" target="_blank"><img class="image-large" src="./myprojectdrawings/313 project two 4.png" alt="PLS CHANGE"></a>
        <a href="./myprojectdrawings/313 project two 5.png" target="_blank"><img class="image-large" src="./myprojectdrawings/313 project two 5.png" alt="PLS CHANGE"></a>
      </div>
    </section>
      
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
createThreeScene("#model1", "/3DModels/pavilion.obj");
createThreeScene("#model2", "/3DModels/toad.obj");
createThreeScene("#model3", "/3DModels/ring.obj");