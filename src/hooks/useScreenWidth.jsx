import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

export default function useScreenWidth() {
    const getScreenWidth = useCallback(() => window.innerWidth, [])

    const [screenWidth, setScreenWidth] = useState(getScreenWidth());

    useEffect(() => {
        function handleResizing() {
            setScreenWidth(getScreenWidth());
        }

        window.addEventListener('resize', controlResize, false);

        let timer;
        function controlResize() {
            if (!timer) {
                timer = setTimeout(() => {
                    timer = null;
                    handleResizing();
                }, 1000)
            }
        };

        return () => window.removeEventListener('resize', handleResizing)
    }, [getScreenWidth]);

    return screenWidth
}