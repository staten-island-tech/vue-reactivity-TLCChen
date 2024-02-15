import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

document.body.insertAdjacentHTML(
  "afterbegin",
  `

<div class="bigBox2"></div>
<div class="bigBox3"></div>
<div class="bigBox4"></div>
<div class="bigBox5"></div>




`
);

document.querySelector(".bigBox").insertAdjacentHTML(
  //make this a DOMSselector object later.
  "beforeend",
  `<div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    `
);
document.querySelector(".bigBox2").insertAdjacentHTML(
  //make this a DOMSselector object later.
  "beforeend",
  `<div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    `
);
document.querySelector(".bigBox3").insertAdjacentHTML(
  //make this a DOMSselector object later.
  "beforeend",
  `<div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    `
);
document.querySelector(".bigBox4").insertAdjacentHTML(
  //make this a DOMSselector object later.
  "beforeend",
  `<div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    `
);
document.querySelector(".bigBox5").insertAdjacentHTML(
  //make this a DOMSselector object later.
  "beforeend",
  `<div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    `
);

document.querySelectorAll(".box").forEach((create) =>
  create.insertAdjacentHTML(
    "afterbegin",
    `
<button class="btn" type="submit">Button</button>
`
  )
);

document.querySelectorAll(".btn").forEach((create) =>
  create.addEventListener("click", function () {
    this.parentElement.insertAdjacentHTML(
      "beforeend",
      `
        <img src="favicon.ico" alt="">
    `
    );
  })
);
