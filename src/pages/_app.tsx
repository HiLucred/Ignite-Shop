import { AppProps } from "next/app";
import { globalStyle } from "../styles/global";
import { Container } from "../styles/pages/app";

import ShoppingCartProvider from "../contexts/ShoppingCartContext";
import Header from "../components/header";
import ShoppingCart from "../components/shoppingCart";

globalStyle();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Container>
        <Header />
        <ShoppingCart />
        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  );
}
