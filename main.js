// ==UserScript==
// @name         xtimer
// @namespace    monax-owo
// @version      2024-02-19
// @description  作業進んでますか？
// @author       monax-owo
// @match        twitter.com/*
// @icon         none
// @grant        none
// ==/UserScript==

const limit = "00:30"; // MM:SS
var elapsedT;
var startTime;
console.log("active!");
//
const d = document;
const getId = d.getElementById;
const getClassName = d.getElementsByClassName;
const getTagName = d.getElementsByTagName;
const getName = d.getElementsByName;
const selector = d.querySelector;
const selectorAll = d.querySelectorAll;
const createEl = d.createElement;
//
const style = `
#x-timer-root {
  height: 20px;
  width: 80px;
  position: fixed;
  margin: auto;
  inset: 0;
  top: 10;
  background-color: darkgray;
}
  `;
//
window.onload = () => {
  const nav = selector(
    `#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > header > div > div > div > div:nth-child(1) > div.css-175oi2r.r-15zivkp.r-1bymd8e.r-13qz1uu.r-1awozwy > nav`
  );
  console.log(nav);
};
const navEl = createEl("div");
navEl.id = "x-timer-nav";
const html = document.documentElement;
const body = document.body;
// root
const timerRootEl = createEl("div");
timerRootEl.id = "x-timer-root";
timerRootEl.innerHTML = `
<div id="xt-1">
  <div id="xt-2">"00:00"</div>
</div>
`;
body.appendChild(timerRootEl);
//
//  style
const styleEl = createEl("style");
styleEl.id = "x-timer-style";
styleEl.innerHTML = style;
html.appendChild(styleEl);

// 
// timer
const timerEl = getId("xt-2")
timerEl?.innerHTML = elapsedT;

const startCountUp = () => {
  startTime = Date.now();
  console.log(startTime);
  console.log(new Date(startTime));
  countUp();
};

const reset = () => {
  timerRootEl.innerHTML = "00:00";
};

const limitAlert = () => {
  alert("作業進みましたか？");
};

const countUp = () => {
  var oldTime = elapsedT;
  const d = new Date(Date.now() - startTime);
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");

  elapsedT = `${m}:${s}`;

  if (elapsedT !== oldTime) {
    timerRootEl.innerHTML = elapsedT;
    console.log(elapsedT);
    if (elapsedT === limit) {
      console.log("LIMIT!");
      limitAlert();
      reset();
      return;
    }
  }
  if (document.visibilityState === "visible") {
    setTimeout(() => {
      countUp();
    }, 10);
  }
};
reset();
startCountUp();
