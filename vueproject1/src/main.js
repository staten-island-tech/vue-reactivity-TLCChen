import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { DOMErrorCodes } from "@vue/compiler-dom";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// document.body.insertAdjacentHTML(
//   "afterbegin",
//   `

// <div class="bigBox2"></div>
// <div class="bigBox3"></div>
// <div class="bigBox4"></div>
// <div class="bigBox5"></div>

// `
// );

// document.querySelector(".bigBox").insertAdjacentHTML(
//   //make this a DOMSselector object later.
//   "beforeend",
//   `<div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     `
// );
// document.querySelector(".bigBox2").insertAdjacentHTML(
//   //make this a DOMSselector object later.
//   "beforeend",
//   `<div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     `
// );
// document.querySelector(".bigBox3").insertAdjacentHTML(
//   //make this a DOMSselector object later.
//   "beforeend",
//   `<div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     `
// );
// document.querySelector(".bigBox4").insertAdjacentHTML(
//   //make this a DOMSselector object later.
//   "beforeend",
//   `<div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     `
// );
// document.querySelector(".bigBox5").insertAdjacentHTML(
//   //make this a DOMSselector object later.
//   "beforeend",
//   `<div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     <div class="box">
//     </div>
//     `
// );

// document.querySelectorAll(".box").forEach((create) =>
//   create.insertAdjacentHTML(
//     "afterbegin",
//     `
// <button class="btn" type="submit">Button</button>
// `
//   )
// );

// document.querySelectorAll(".btn").forEach((create) =>
//   create.addEventListener("click", function () {
//     this.parentElement.insertAdjacentHTML(
//       "beforeend",
//       `
//         <img src="favicon.ico" alt="">
//     `
//     );
//   })
// );
// make a flexbox then add colors to the sides that have separate ids. Press id to move in direction
const block = document.querySelector(".block");
document.querySelector(".block").style.position = "absolute";
document.querySelector(".block").style.left = "1rem";
document.querySelector(".block").style.top = "1rem";

const Doms = {
  up: document.querySelector(".up"),
  down: document.querySelector(".down"),
  left: document.querySelector(".left"),
  right: document.querySelector(".right"),
};
let left = 0;
let down = 0;
let kids = "";
let now = "";
function move() {
  Doms.left.addEventListener("click", function () {
    Doms.left.style.position = "relative";
    left -= 10;
    document.querySelector(".block").style.left = left.toString() + "rem";
    document.querySelector(".block").style.backgroundColor = "blue";
    console.log(left.toString() + "rem");
  });

  Doms.right.addEventListener("click", function () {
    document.querySelector(".block").style.position = "relative";
    left += 10;
    document.querySelector(".block").style.left = left.toString() + "rem";
    document.querySelector(".block").style.backgroundColor = "blue";
    console.log(left.toString() + "rem");
  });
  Doms.down.addEventListener("click", function () {
    document.querySelector(".block").style.position = "relative";
    down += 10;
    document.querySelector(".block").style.top = down.toString() + "rem";
    document.querySelector(".block").style.backgroundColor = "blue";
    console.log(left.toString() + "rem");
  });
  Doms.up.addEventListener("click", function () {
    document.querySelector(".block").style.position = "relative";
    down -= 10;
    document.querySelector(".block").style.top = down.toString() + "rem";
    document.querySelector(".block").style.backgroundColor = "blue";
    console.log(left.toString() + "rem");
  });
}
// document.querySelector(".block").addEventListener("click", function () {
//   document.querySelector(".block").style.position = "relative";
//   left += 10;
//   document.querySelector(".block").style.top = left.toString() + "rem";
//   document.querySelector(".block").style.backgroundColor = "blue";
//   console.log(left.toString() + "rem");
// });

move();
