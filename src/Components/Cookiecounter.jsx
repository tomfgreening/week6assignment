import { useState, useEffect } from "react";
import Clikr from "./Clickerbutton";
import Timerclean from "./Timerclean";
import Cookietimer from "./Cookietimer";

export default function Cookiecounter() {
  const [cookieCount, setCookieCount] = useState(0);
  const [cps, setCPS] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookieCount((cookieCount) => cookieCount + cps);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [cps]);

}
