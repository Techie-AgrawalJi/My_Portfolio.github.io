let abtbtn = document.querySelector(".aboutbtn");
var divnav = document.querySelector(".divnav");
let sectwo = document.querySelector(".sectwo");
let about = document.querySelector(".about");
function createElement(elmnt) {
  let element = document.createElement(elmnt);
  return element;
}
let div = createElement("div");
let text = createElement("div");
let img = createElement("img");
let child1 = createElement("div");
let child2 = createElement("div");
let child3 = createElement("div");
let child4 = createElement("div");
let child11 = createElement("div");
let child12 = createElement("div");
let child21 = createElement("div");
let child22 = createElement("div");
let child31 = createElement("div");
let child32 = createElement("div");
let child41 = createElement("div");
let child42 = createElement("div");
let img0 = createElement("img");
let img1 = createElement("img");
let img2 = createElement("img");
let img3 = createElement("img");
let img4 = createElement("img");
let a0 = createElement("a");
let a1 = createElement("a");
let a2 = createElement("a");
let a3 = createElement("a");
let a4 = createElement("a");
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
function setvalues(img, source, a, hrf) {
  img.setAttribute("Class", "images");
  img.src = source;
  a.href = hrf;
  a.appendChild(img);
}
function setAndappend(child,a){
  child.setAttribute("class", "childimg");
  child.appendChild(a);
}
function setAppendset(childA,childAa,childAb,divside,text){
  document.querySelector(divside).appendChild(childA);
  childA.setAttribute("class","childleft1");
  childA.appendChild(childAa);
  childA.appendChild(childAb);
  childAa.setAttribute("class","childtext");
  childAa.innerHTML=text;
}
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
  document.querySelector(".info").innerHTML = "View Practices";
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
  setAppendset(child1,child11,child12,".pracdivleft","Forms are used to store user details.This is my first form which i made at the very beginning of learning web developement.This form is made by using <b>HTML</b> and <b>CSS</b>.You can preview it by clicking on the image.");
  setAppendset(child2,child21,child22,".pracdivleft","This is <b>Camper Cafe</b> menu card, one of my practice from FCC website, which helped me to learn making menu cards,invitation cards,wedding cards and many more. You can preview it by clicking on the image.This is also made by using <b>HTML</b> and <b>CSS</b>. Click on the image to preview");
  setAppendset(child3,child31,child32,".pracdivright", "This is the random practice page which is created using <b>HTML</b> and <b>CSS</b>.Pages like this can be used to display information about particular person,place,topic,event,etc. Click on the image to preview");
  setAppendset(child4,child41,child42,".pracdivright","This is the <b>Role Playing Game</b> which is one of the project to have the basic understanding of how games are built.This is created using <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>. Click on the image to play this game.");
  setAndappend(child12,a1);
  setAndappend(child22,a2);
  setAndappend(child32,a3);
  setAndappend(child42,a4);
  setvalues(
    img1,
    "form.png",
    a1,
    "https://Techie-AgrawalJi.github.io/FCCform.github.io/"
  );
  setvalues(
    img2,
    "cafe.png",
    a2,
    "https://Techie-AgrawalJi.github.io/Cafe.github.io/"
  );
  setvalues(
    img3,
    "Hanumanji.png",
    a3,
    "https://Techie-AgrawalJi.github.io/tribute_page.github.io/"
  );
  setvalues(
    img4,
    "RPG.png",
    a4,
    "https://Techie-AgrawalJi.github.io/RPG.github.io/"
  );
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
