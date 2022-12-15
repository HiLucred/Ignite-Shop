import { styled } from "..";

export const ShoppingCartContainer = styled("div", {
  variants: {
    shoppingCartIsOpen: {
      open: {
        right: 0,
      },
      closed: {
        right: "-80%",
        transition: "all 0.8s ease-in-out",
      },
    },
  },

  width: "30rem",
  height: "100vh",

  paddingTop: "4.5rem",
  backgroundColor: "$gray800",

  position: "absolute",
  top: 0,
  zIndex: 1000,
  transition: "all 0.5s",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  svg: {
    position: "absolute",
    top: "1.5rem",
    right: "1.5rem",
    cursor: "pointer",
  },

  h2: {
    marginBottom: "2rem",
  },
});

export const TitleCart = styled("div", {
  width: "80%",
});

export const ProductList = styled("div", {
  width: "80%",
});

export const ProductBox = styled("div", {
  display: "flex",
  gap: "1.25rem",
  marginBottom: "1.5rem",
});

export const ProductImage = styled("div", {
  width: "6.37125rem",
  height: "5.8125rem",

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
});

export const ProductText = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.125rem",

  h3: {
    fontWeight: "normal",
    color: "$gray300",
  },

  h4: {
    color: "$gray200",
  },

  span: {
    marginTop: "0.375rem",
    color: "$green300",
    fontWeight: "bold",

    cursor: "pointer",
  },
});

export const ShoppingCartFooter = styled("footer", {
  width: "80%",
  position: "absolute",
  bottom: "2rem",

  button: {
    width: "100%",
    height: "4.3125rem",

    borderRadius: 8,
    border: "none",
    cursor: "pointer",

    fontSize: "1.125rem",
    fontWeight: "bold",
    color: "$white",
    backgroundColor: "$green500",

    "&:hover": {
      backgroundColor: "$green300",
    },
  },
});

export const ShoppingCartQuantity = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "0.4375rem",

  label: {
    color: "$gray100",
  },

  span: {
    color: "$gray300",
  },
});

export const ShoppingCartTotal = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "3.5625rem",

  fontWeight: "bold",
  color: "$gray100",

  label: {
    fontSize: "1.125rem",
  },

  span: {
    fontSize: "1.5rem",
  },
});
