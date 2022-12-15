import { Handbag } from "phosphor-react";
import { HeaderContainer, HandbagBox } from "../styles/components/header";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../assets/Logo.svg";
import { useContext } from "react";
import { ShoppingCart } from "../contexts/ShoppingCartContext";

export default function Header() {
  const { productsInCart, toggleShoppingCartWindom } = useContext(ShoppingCart);

  const isProductsInCartEmpty = productsInCart.length !== 0 ? false : true;

  const numberOfProductsInCart = productsInCart.length;

  return (
    <HeaderContainer>
      <Link href={"/"} prefetch={false}>
        <Image src={logoImg} alt="Logotipo do ignite" />
      </Link>

      <HandbagBox
        onClick={toggleShoppingCartWindom}
        disabled={isProductsInCartEmpty}
      >
        <Handbag size={32} color={"gray"} weight={"bold"} />

        {numberOfProductsInCart !== 0 ? (
          <span>{numberOfProductsInCart}</span>
        ) : null}
      </HandbagBox>
    </HeaderContainer>
  );
}
