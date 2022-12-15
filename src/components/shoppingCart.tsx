import Image from "next/image";
import axios from "axios";
import { useContext, useState } from "react";
import { ShoppingCart } from "../contexts/ShoppingCartContext";
import { X } from "phosphor-react";
import { formatMoney } from "../utils/formatMoney";
import {
  ProductBox,
  ProductImage,
  ProductList,
  ProductText,
  ShoppingCartContainer,
  ShoppingCartFooter,
  ShoppingCartQuantity,
  ShoppingCartTotal,
  TitleCart,
} from "../styles/components/shoppingCart";

export default function ShoppingCartAside() {
  const {
    productsInCart,
    removeItemToCart,
    isShoppingCartOpen,
    toggleShoppingCartWindom,
  } = useContext(ShoppingCart);

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const isOpen = isShoppingCartOpen ? "open" : "closed";

  const totalPriceInCart = productsInCart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  async function checkoutCart() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: productsInCart,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <ShoppingCartContainer shoppingCartIsOpen={isOpen}>
      <X size={24} weight="bold" onClick={toggleShoppingCartWindom} />

      <TitleCart>
        <h2>Sacola de compras</h2>
      </TitleCart>

      <ProductList>
        {productsInCart.map((item) => {
          return (
            <ProductBox key={item.id}>
              <ProductImage>
                <Image
                  src={item.imageUrl}
                  alt=""
                  width={94.79}
                  height={94.79}
                />
              </ProductImage>

              <ProductText>
                <h3>{item.name}</h3>
                <h4>{formatMoney(item.price)}</h4>
                <span onClick={() => removeItemToCart(item.id)}>Remover</span>
              </ProductText>
            </ProductBox>
          );
        })}
      </ProductList>

      <ShoppingCartFooter>
        <ShoppingCartQuantity>
          <label>Quantidade</label>
          <span>{productsInCart.length} itens</span>
        </ShoppingCartQuantity>

        <ShoppingCartTotal>
          <label>Valor total</label>
          <span>{formatMoney(totalPriceInCart)}</span>
        </ShoppingCartTotal>

        <button onClick={checkoutCart}>Finalizar Compra</button>
      </ShoppingCartFooter>
    </ShoppingCartContainer>
  );
}
