import { useState, useEffect } from "react";

export default function Clikr() {
  const [cookieCount, setCookieCount] = useState(0);
  return (
    <div>
      <p>{cookieCount}</p>
      <button onClick={() => setCookieCount(cookieCount + 1)}>
        Click me for a cookie!
      </button>
    </div>
  );
}
