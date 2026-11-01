import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: "10px",
});

export const error = style({
  margin: 0,
  color: "#c0392b",
});
