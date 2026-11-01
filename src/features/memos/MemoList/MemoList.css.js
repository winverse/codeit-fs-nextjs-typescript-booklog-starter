import { style } from "@vanilla-extract/css";

export const list = style({
  margin: "0 0 16px",
  padding: 0,
  listStyle: "none",
});

export const item = style({
  padding: "10px 0",
  borderBottom: "1px solid #eee",
});

export const text = style({
  margin: "0 0 4px",
});

export const meta = style({
  margin: 0,
  fontSize: "12px",
  color: "#999",
});
