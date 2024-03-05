"use client"
import ScrollPositionContext from "@/utils/contexts/ScrollPositionContext";
import { useState, useEffect } from "react";
import findCurrentElementIndex from "@/utils/methods/findCurrentElementIndex";
const ScrollPositionProvider = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const checkScrollPosition = () => {
        setCurrentIndex(findCurrentElementIndex(window.pageYOffset));
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);
        return () => {
            window.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    return (
        <ScrollPositionContext.Provider value={currentIndex}>
            {children}
        </ScrollPositionContext.Provider>
    );
};

export default ScrollPositionProvider;