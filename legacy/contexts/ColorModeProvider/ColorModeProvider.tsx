import { createContext, useState } from "react";

export type ColorMode = "white" | "black";

export type ColorModeContextType = {
    colorMode: ColorMode;
    onSetColorMode: (colorMode: ColorMode) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>({
    colorMode: "white",
    onSetColorMode: () => {},
});

const ColorModeProvider: React.FC = ({ children }) => {
    // TODO 시간이 낮이냐 밤이냐 따라서 다른 초기값을 줘볼까아?

    const [colorMode, setColorMode] = useState<ColorMode>("white");
    const onSetColorMode = (colorMode: ColorMode) => {
        setColorMode(colorMode);
    };
    return (
        <ColorModeContext.Provider value={{ colorMode, onSetColorMode }}>
            {children}
        </ColorModeContext.Provider>
    );
};

export default ColorModeProvider;
