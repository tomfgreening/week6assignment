import { useState, useEffect } from "react";

export default function Cookietimer() {
  const [cookieCount, setCookieCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCookieCount((cookieCount) => cookieCount + 1);
    }, 1000);
  }, []);

  return (
    <div>
      You are making this many cookies per second, aren't you clever!:
      {cookieCount}
    </div>
  );
}
