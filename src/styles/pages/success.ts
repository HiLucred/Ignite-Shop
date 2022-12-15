import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: "1.6rem",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ProductsImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "2rem",
});

export const ImageContainer = styled("div", {
  width: 140,
  maxWidth: "8.75rem",
  height: 140,

  boxShadow: "0px 0px 5px rgba(0,0,0,0.8)",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "50%",

  marginTop: "4rem",
  marginBottom: "4rem",
  marginRight: "-10%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover",
  },
});
