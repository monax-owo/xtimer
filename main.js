// ==UserScript==
// @name         New Userscript
// @namespace    monax
// @version      2024-02-19
// @description  try to take over the world!
// @author       You
// @match        twitter.com/*
// @icon         none
// @grant        none
// ==/UserScript==

(function () {
  ("use strict");
  const limit = "00:30"; // MM:SS
  var tString;
  var startTime;
  console.log("active!");
  //
  //
  //
  const style = `
#x-timer-root {
height: 20px;
width: 80px;
position: fixed;
top: 20px;
left: 20px;
background-color: darkgray;

  }
  `;

  //
  const navEl = document.createElement("div");
  navEl.id = "x-timer-nav";

  window.onload = () => {
    const nav = document.querySelector(
      `#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > header > div > div > div > div:nth-child(1) > div.css-175oi2r.r-15zivkp.r-1bymd8e.r-13qz1uu.r-1awozwy > nav`
    );
    console.log(nav);
    nav.appendChild(navEl);
  };
  //
  //
  const html = document.documentElement;
  const body = document.body;

  // root
  const timerRootEl = document.createElement("div");
  timerRootEl.id = "x-timer-root";
  timerRootEl.innerHTML = "00:00";
  body.appendChild(timerRootEl);
  // style
  const styleEl = document.createElement("style");
  styleEl.id = "x-timer-style";
  styleEl.innerHTML = style;
  html.appendChild(styleEl);
  // nav

  //

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
    //
  };

  const countUp = () => {
    var oldTime = tString;
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");

    tString = `${m}:${s}`;

    if (tString !== oldTime) {
      timerRootEl.innerHTML = tString;
      console.log(tString);
      if (tString === limit) {
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
})();
