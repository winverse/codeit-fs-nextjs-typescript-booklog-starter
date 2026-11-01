import { style } from "@vanilla-extract/css";

export const filter = style({
  display: "flex",
  gap: "8px",
  marginBottom: "20px",
});

export const link = style({
  padding: "6px 12px",
  border: "1px solid #d8d3c7",
  borderRadius: "999px",
  backgroundColor: "#fff",
});

export const activeLink = style([
  link,
  {
    borderColor: "#3d6b4f",
    backgroundColor: "#3d6b4f",
    color: "#fff",
  },
]);
