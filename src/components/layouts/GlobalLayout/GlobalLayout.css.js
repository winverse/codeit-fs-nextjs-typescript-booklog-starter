import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 24px",
  backgroundColor: "#fff",
  borderBottom: "1px solid #e4e0d6",
});

export const logo = style({
  fontSize: "22px",
  fontWeight: 700,
  color: "#3d6b4f",
});

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

export const newBookLink = style({
  fontWeight: 600,
  color: "#3d6b4f",
});

export const main = style({
  maxWidth: "860px",
  margin: "0 auto",
  padding: "24px",
});
