import { useState, useEffect } from "react";
export default function Timerclean() {
  const [cookieCount, setCookieCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookieCount((cookieCount) => cookieCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return <div>cookie timer :{cookieCount}</div>;
}
