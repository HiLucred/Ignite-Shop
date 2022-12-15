import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import Head from "next/head";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { HandbagBox, HomeContainer, Product } from "../styles/pages/home";
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCart } from "../contexts/ShoppingCartContext";
import { formatMoney } from "../utils/formatMoney";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const { addItemToCart } = useContext(ShoppingCart);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                prefetch={false}
              >
                <Image src={product.imageUrl} alt="" width={500} height={480} />
              </Link>

              <footer>
                <div>
                  <strong>{product.name}</strong>

                  <span>{formatMoney(product.price)}</span>
                </div>

                <HandbagBox onClick={() => addItemToCart(product)}>
                  <Handbag color="white" size={32} weight={"bold"} />
                </HandbagBox>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
