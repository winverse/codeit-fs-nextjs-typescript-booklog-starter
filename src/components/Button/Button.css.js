import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  padding: "8px 16px",
  border: "1px solid #3d6b4f",
  borderRadius: "6px",
  fontSize: "14px",
  cursor: "pointer",
  selectors: {
    "&:disabled": {
      opacity: 0.5,
      cursor: "default",
    },
  },
});

export const button = styleVariants({
  primary: [base, { backgroundColor: "#3d6b4f", color: "#fff" }],
  secondary: [base, { backgroundColor: "#fff", color: "#3d6b4f" }],
});
