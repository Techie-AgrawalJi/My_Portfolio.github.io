let abtbtn = document.querySelector(".aboutbtn");
var divnav = document.querySelector(".divnav");
let sectwo = document.querySelector(".sectwo");
let about = document.querySelector(".about");
let div = document.createElement("div");
let text = document.createElement("div");
let img = document.createElement("img");
let child1 = document.createElement("div");
let child2 = document.createElement("div");
let child3 = document.createElement("div");
let child4 = document.createElement("div");
let child11 = document.createElement("div");
let child12 = document.createElement("div");
let child21 = document.createElement("div");
let child22 = document.createElement("div");
let child31 = document.createElement("div");
let child32 = document.createElement("div");
let child41 = document.createElement("div");
let child42 = document.createElement("div");
let img0 = document.createElement("img");
let img1 = document.createElement("img");
let img2 = document.createElement("img");
let img3 = document.createElement("img");
let img4 = document.createElement("img");
let a0 = document.createElement("a");
let a1 = document.createElement("a");
let a2 = document.createElement("a");
let a3 = document.createElement("a");
let a4 = document.createElement("a");
abtbtn.addEventListener("click", () => {
  document.title = "About Me";
  divnav.querySelector(".imageone").remove();
  divnav.querySelector(".img1").classList.add("img1update");
  divnav.querySelector(".img1").classList.remove("img1");
  divnav.querySelector(".img1update").append(a0);
  a0.appendChild(img0);
  a0.href = "portfolio.html";
  img0.setAttribute("class", "arrowimg");
  img0.src = "back.png";
  document.querySelector(".info").innerHTML = "Know About Me";
  sectwo.querySelector(".practices").remove();
  sectwo.querySelector(".goal").remove();
  sectwo.querySelector(".about").classList.remove("about");
  about.querySelector(".abouthead").remove();
  about.querySelector(".abouttext").remove();
  about.querySelector(".aboutbtn").remove();
  about.classList.add("abtupdate");
  div.setAttribute("class", "divmain");
  img.src = "Jay.jpg";
  div.appendChild(img);
  text.setAttribute("class", "divtxt");
  about.appendChild(div);
  about.appendChild(text);
  text.innerHTML =
    "<ul><h2>Interested in being in any of the profession</h2><li>Web Developer</li><li>Software Engineer</li><li>Cybersecurity Engineer</li><li>Prompt Engineer</li></ul><ul><h2>Hobbies</h2><li>Learning new technologies</li><li>Practicing code</li><li>playing Chess</li><li>playing Flight simulation games</li><li>Reading Self-Help books </li></ul><h2>Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>";
});
let prac = document.querySelector(".pracbtn");
let practices = document.querySelector(".practices");
prac.addEventListener("click", () => {
  document.title = "My practices";
  divnav.querySelector(".imageone").remove();
  divnav.querySelector(".img1").classList.add("img1update");
  divnav.querySelector(".img1").classList.remove("img1");
  divnav.querySelector(".img1update").append(a0);
  a0.appendChild(img0);
  a0.href = "portfolio.html";
  img0.setAttribute("class", "arrowimg");
  img0.src = "back.png";
  document.querySelector(".info").innerHTML =
    "Click on the images to View Practices";
  sectwo.querySelector(".practices").remove();
  sectwo.querySelector(".goal").remove();
  sectwo.querySelector(".about").classList.remove("about");
  about.querySelector(".abouthead").remove();
  about.querySelector(".abouttext").remove();
  about.querySelector(".aboutbtn").remove();
  about.classList.add("pracupdate");
  about.appendChild(div);
  about.appendChild(text);
  div.setAttribute("class", "pracdivleft");
  text.setAttribute("class", "pracdivright");
  document.querySelector(".pracdivleft").appendChild(child1);
  document.querySelector(".pracdivleft").appendChild(child2);
  document.querySelector(".pracdivright").appendChild(child3);
  document.querySelector(".pracdivright").appendChild(child4);
  child1.setAttribute("class", "childleft1");
  child2.setAttribute("class", "childleft2");
  child3.setAttribute("class", "childright1");
  child4.setAttribute("class", "childright2");
  child1.appendChild(child11);
  child1.appendChild(child12);
  child2.appendChild(child21);
  child2.appendChild(child22);
  child3.appendChild(child31);
  child3.appendChild(child32);
  child4.appendChild(child41);
  child4.appendChild(child42);
  child11.setAttribute("class", "childtext");
  child21.setAttribute("class", "childtext");
  child31.setAttribute("class", "childtext");
  child41.setAttribute("class", "childtext");
  child12.appendChild(a1);
  child22.appendChild(a2);
  child32.appendChild(a3);
  child42.appendChild(a4);
  child12.setAttribute("class", "childimg");
  child22.setAttribute("class", "childimg");
  child32.setAttribute("class", "childimg");
  child42.setAttribute("class", "childimg");
  img1.setAttribute("class", "images");
  img2.setAttribute("class", "images");
  img3.setAttribute("class", "images");
  img4.setAttribute("class", "images");
  img1.src = "form.png";
  img2.src = "cafe.png";
  img3.src = "Hanumanji.png";
  img4.src = "RPG.png";
  a1.href = "https://agrawalji280203.github.io/FCCform.github.io/";
  a3.href = "https://agrawalji280203.github.io/tribute_page.github.io/";
  a2.href = "https://agrawalji280203.github.io/Cafe.github.io/";
  a4.href = "https://agrawalji280203.github.io/RPG.github.io/";
  a1.appendChild(img1);
  a2.appendChild(img2);
  a3.appendChild(img3);
  a4.appendChild(img4);
  child11.innerHTML =
    "Forms are used to store user details.This is my first form which i made at the very beginning of learning web developement.This form is made by using <b>HTML</b> and <b>CSS</b>.You can preview it by clicking on the image.";
  child21.innerHTML =
    "This is <b>Camper Cafe</b> menu card, one of my practice from FCC website, which helped me to learn making menu cards,invitation cards,wedding cards and many more. You can preview it by clicking on the image.This is also made by using <b>HTML</b> and <b>CSS</b>. Click on the image to preview";
  child31.innerHTML =
    "This is the random practice page which is created using <b>HTML</b> and <b>CSS</b>.Pages like this can be used to display information about particular person,place,topic,event,etc. Click on the image to preview";
  child41.innerHTML =
    "This is the <b>Role Playing Game</b> which is one of the project to have the basic understanding of how games are built.This is created using <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>. Click on the image to play this game.";
});
let goals = document.querySelector(".goal");
let goalbtn = document.querySelector(".goalsbtn");
goalbtn.addEventListener("click", () => {
  document.title = "My Goals";
  divnav.querySelector(".imageone").remove();
  divnav.querySelector(".img1").classList.add("img1update");
  divnav.querySelector(".img1").classList.remove("img1");
  divnav.querySelector(".img1update").append(a0);
  a0.appendChild(img0);
  a0.href = "portfolio.html";
  img0.setAttribute("class", "arrowimg");
  img0.src = "back.png";
  document.querySelector(".info").innerHTML = "My Goal-Cyber Security Engineer";
  sectwo.querySelector(".practices").remove();
  sectwo.querySelector(".goal").remove();
  sectwo.querySelector(".about").classList.remove("about");
  about.querySelector(".abouthead").remove();
  about.querySelector(".abouttext").remove();
  about.querySelector(".aboutbtn").remove();
  about.classList.add("goalmain");
  about.appendChild(div);
  div.setAttribute("class", "goalstxt");
  div.innerHTML = `There is a well said quote, <i>"A Goal without plan is just a wish"</i> which is true universally, but to achieve any goal you must be clear in your mind that why you want to achieve.Some first have a dream to become something and then they set their goal while some first have a goal then make it their dream. I have also seen a dream of being a <b> Cyber Security Engineer </b>. The field which is always a good opportunity for engineers and espicially for hacking enthusiasts. Cyber Security protects your data from attackers and hacking of your devices. Since my childhood, it was my curiosity of knowing that how can i know someone's device's password but that time i did not knew about the hacking but as i grew up, my interest in coding developed and after exploring some into coding, i got to know about hacking, especially ethical hacking. Hacking inspired me to be Cyber Security Engineer`;
});
