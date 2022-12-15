import { styled } from "..";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const HandbagBox = styled("button", {
  width: "3.5rem",
  height: "3.5rem",
  backgroundColor: "$gray800",
  borderRadius: 6,
  border: 'none',

  position: "relative",
  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  span: {
    width: "1.5rem",
    height: "1.5rem",

    position: "absolute",
    top: "-0.5rem",
    right: "-0.5rem",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontFamily: "Roboto, sans-serif",
    fontSize: "0.875rem",
    fontWeight: "bold",

    borderRadius: 100,
    color: '$white',
    backgroundColor: "$green500",
  },
});
