import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(()=>{
        window.scrollTo(0,30);
    },[pathname]);
    return null;
}

export {ScrollToTop}