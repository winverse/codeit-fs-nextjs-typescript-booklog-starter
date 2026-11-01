import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  display: "inline-block",
  padding: "2px 8px",
  borderRadius: "999px",
  fontSize: "12px",
});

export const badge = styleVariants({
  wish: [base, { backgroundColor: "#e8eefc", color: "#3557b7" }],
  reading: [base, { backgroundColor: "#fdf1dc", color: "#a86b00" }],
  done: [base, { backgroundColor: "#e3f2e7", color: "#2f6b45" }],
});
