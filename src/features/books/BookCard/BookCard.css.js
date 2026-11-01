import { style } from "@vanilla-extract/css";

export const card = style({
  display: "block",
  height: "100%",
  padding: "16px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 1px 4px rgb(0 0 0 / 8%)",
});

export const title = style({
  margin: "0 0 4px",
  fontSize: "17px",
});

export const author = style({
  margin: "0 0 12px",
  color: "#666",
});

export const meta = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#c98a1b",
});

export const date = style({
  margin: "12px 0 0",
  fontSize: "12px",
  color: "#999",
});
