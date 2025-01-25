import { useState, useEffect } from "react";
import Clikr from "./Clickerbutton";
import Timerclean from "./Timerclean";
import Cookietimer from "./Cookietimer";


export default function Cookiecounter() {
  //this block of code is very useful. What does it do?
  useEffect(() => {
    const myInterval = setInterval(() => {
      setCookies((currentCookies) => {
        currentCookies + cps;
      });
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

//   I know the code above adds the clicked cookies and cookies per second total but i'm pulling my hair out trying to get it to function as intended.