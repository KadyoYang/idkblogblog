import { useContext } from "react";
import { ColorModeContext } from "./ColorModeProvider";

export const useColorMode = () => {
    const { colorMode, onSetColorMode } = useContext(ColorModeContext);
    return { colorMode, onSetColorMode };
};
