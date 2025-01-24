import { useState } from "react";
import "./App.css";
import Clickerbutton from "./Components/Clickerbutton";
import CPS from "./Components/CPS";
import Header from "./Components/Header";
import Upgradesshop from "./Components/Upgradesshop";
import Cookiecount from "./Components/Cookiecount";

export default function App() {
  return (
    <div>
      <Header headerText="Coo-key Clikr" />
      <Clickerbutton clickerButtonText="I am BEGGING you to click me pls" />
      <Cookiecount cookieCountText="This is how many cookies you have right now, good job!" />
      <CPS CPStext="You are making X cookies per second, aren't you clever!" />
      <Upgradesshop upgradesShopText="Buy some upgrades. That is a command, not a suggestion." />
    </div>
  );
}
