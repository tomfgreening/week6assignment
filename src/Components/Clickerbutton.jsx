import { useState, useEffect } from "react";

export default function App() {
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

// useEffect is basically saying "Every time the value of this specific variable change, run this function".
