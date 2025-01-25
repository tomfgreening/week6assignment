import { useState } from "react";
import "./App.css";
import Clickerbutton from "./Components/Clickerbutton";
import Header from "./Components/Header";
import Upgradesshop from "./Components/Upgradesshop";
import Cookiecount from "./Components/Cookiecount";
import Timerclean from "./Components/Timerclean";
import { UpgradeItems } from "./lib/data";
// import Cookietimer from "./Components/Cookietimer";

export default function App() {
  return (
    <div>
      <Header headerText="Coo-key Clikr" />



      <Clickerbutton clickerButtonText="I am BEGGING you to click me pls" />




      <Cookiecount />





      Upgrades Shop - Buy it NOW
      {UpgradeItems.map(function (item) {
        return (
          <Upgradesshop key={item.id} name={item.name} price={item.price} />
        );
      })}
      {/* <Cookietimer /> */}
      <Timerclean />
    </div>
  );
}
