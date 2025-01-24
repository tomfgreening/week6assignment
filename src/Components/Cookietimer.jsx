import { useState, useEffect } from "react";

export default function Cookietimer() {
    console.log("going up by 1 increment every second");
    const [cookieCount, setCookieCount] = useState(0);

    useEffect(() => {
        console.log("Cookietimer component useEffect callback");
    setInterval(()=> {
        setCookieCount((cookieCount) => cookieCount + 1);
    }, 1000);
}, []);

return <div>Cookies Per Second:{cookieCount}</div>;
}