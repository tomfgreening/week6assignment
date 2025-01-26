import { useState } from "react";
import "./App.css";
import Clickerbutton from "./Components/Clickerbutton";
import Header from "./Components/Header";
import Upgradesshop from "./Components/Upgradesshop";
import Cookiecounter from "./Components/Cookiecounter";
import Timerclean from "./Components/Timerclean";
import { UpgradeItems } from "./lib/data";

export default function App() {
  return (
    <div>
      <Header headerText="Coo-key Clikr" />
      <Clickerbutton />
      <Timerclean />
      <Cookiecounter />
      {UpgradeItems.map(function (item) {
        return (
          <Upgradesshop key={item.id} name={item.name} price={item.price} />
        );
      })}
    </div>
  );
}
