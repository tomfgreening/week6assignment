import { useState, useEffect } from "react";
export default function Timerclean() {
  const [cookieCount, setCookieCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookieCount((cookieCount) => cookieCount + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  });

  return <div> You get 1 cookie every 2 seconds, neat! --- {cookieCount}</div>;
}
