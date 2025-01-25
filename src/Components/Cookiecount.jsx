import { useState, useEffect } from "react";
import Clikr from "./Clickerbutton";
import Timerclean from "./Timerclean";

export default function Cookiecount() {
    const [cookieCount, setCookieCount] = useState(0);

    return<p>
        <Clikr Cookiecount={Cookiecount} setCookieCount={set}
         </p>;
}
