import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const label = style({
  fontSize: "13px",
  color: "#666",
});

export const select = style({
  padding: "8px 10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
});

export const error = style({
  margin: 0,
  color: "#c0392b",
});
