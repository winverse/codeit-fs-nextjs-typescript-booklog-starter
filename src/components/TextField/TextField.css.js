import { style } from "@vanilla-extract/css";

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const label = style({
  fontSize: "13px",
  color: "#666",
});

export const input = style({
  padding: "8px 10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
});
