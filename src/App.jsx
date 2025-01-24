import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clickerbutton from "./Components/Clickerbutton";
import CPS from "./Components/CPS";
import Header from "./Components/Header";
import Upgradesshop from "./Components/Upgradesshop";
import Cookiecount from "./Components/Cookiecount";

export default function App() {
  return (
    <div>
      <Header />
      <Clickerbutton />
      <Cookiecount />
      <CPS />
      <Upgradesshop />
    </div>
  );
}
