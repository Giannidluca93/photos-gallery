import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { MainTheme } from "themes";

import { Roboto } from "next/font/google";
import { ModalProvider } from "context/modalContext";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <ThemeProvider theme={MainTheme}>
        <main className={roboto.className}>
          <CssBaseline />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </ModalProvider>
  );
}
