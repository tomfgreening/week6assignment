import { useState, useEffect } from "react";

export default function Clikr() {
  const [clickedCookieCount, setclickedCookieCount] = useState(0);
  return (
    <div>
      <p>{clickedCookieCount}</p>
      <button onClick={() => setclickedCookieCount(clickedCookieCount + 1)}>
        Click me for a cookie!
      </button>
    </div>
  );
}
