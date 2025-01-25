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

  return (
    <div>
      <h1>{cookieCount}</h1>
      {cps}
    </div>
  );
}

/* // useEffect(() => {
//   const myInterval = setInterval(() => {
//     setCookies((currentCookies) => {
//       currentCookies + cps;
//     });
//   }, 1000);
//   return () => {
//     clearInterval(myInterval);
//   };
// }, [cps]); */

// import { useState, useEffect } from "react";

// export default function CookieCounter() {
//   const [cookieCount, setCookieCount] = useState(0);
//   const [cps, setCPS] = useState(1);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCookieCount((cookieCount) => cookieCount + cps);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [cps]);

//   return (
//     <div>
//       <h1>🍪 Cookies: {cookieCount}</h1>
//       <h2>⚡ Cookies Per Second (CPS): {cps}</h2>

//       {/* Clicker button */}
//       <button onClick={() => setCookieCount(cookieCount + 1)}>
//         🍪 Click me for a cookie!
//       </button>

//       {/* Upgrade button */}
//       <button onClick={() => setCPS(cps + 1)}>
//         ⚡ Buy Upgrade (+1 CPS)
//       </button>
//     </div>
//   );
