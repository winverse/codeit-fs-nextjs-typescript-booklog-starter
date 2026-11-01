import { style } from "@vanilla-extract/css";

export const title = style({
  margin: "0 0 16px",
  fontSize: "22px",
});

export const info = style({
  display: "grid",
  gridTemplateColumns: "80px 1fr",
  rowGap: "8px",
  margin: 0,
});
