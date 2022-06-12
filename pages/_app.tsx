import "../styles/globals.css";
import type { AppProps } from "next/app";
import ColorModeProvider from "../contexts/ColorModeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

const Providers: React.FC = ({ children }) => {
  return <ColorModeProvider>{children}</ColorModeProvider>;
};

export default MyApp;
