import { style } from "@vanilla-extract/css";

export const list = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: "16px",
  margin: 0,
  padding: 0,
  listStyle: "none",
});
