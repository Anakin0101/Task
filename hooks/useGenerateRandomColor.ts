import Colors from "@/constants/Colors";
import { useState,useCallback} from "react";

const useGenerateRandomColor = () => {

    const [randomColor, setRandomColor] = useState<string>(Colors.light.background)

    const getRgb = useCallback(() =>  Math.floor(Math.random() * 256),[]);
           


    const rgbToHexColor =useCallback((r: number, g: number, b: number): string => {
        return '#' + [r,g,b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex: hex;
    }).join('');
},[])

    const handleGenerateColor = useCallback(() => {
        const color = {
            r:getRgb(),
            g:getRgb(),
            b:getRgb()
        }
        setRandomColor(rgbToHexColor(color.r,color.g,color.b))
    
},[]);

    return {randomColor, handleGenerateColor}
}
export default useGenerateRandomColor