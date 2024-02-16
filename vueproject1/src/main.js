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
const block = document.querySelector(".block");
block.style.position = "absolute";
block.style.left = "1rem";
block.style.top = "1rem";

const Doms = {
  up: document.querySelector(".up"),
  down: document.querySelector(".down"),
  left: document.querySelector(".left"),
  right: document.querySelector(".right"),
};
let left = 0;
function move() {
  block.addEventListener("click", function () {
    block.style.position = "absolute";
    block.style.top = "1rem";
  });

  // Doms.down.addEventListener("click", function () {
  //   block.style.position = "relative";
  //   block.style.bottom = "1rem";
  // });
  Doms.left.addEventListener("click", function () {
    left++;
    let bob = (block.style.position = "relative");
    block.style.left = `${left}`;
    console.log(left);
  });
  // Doms.right.addEventListener("click", function () {
  //   block.style.position = "relative";
  //   block.style.right = "1rem";
  // });
}
move();
