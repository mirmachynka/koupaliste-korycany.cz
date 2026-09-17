import { semantic, token } from "#uddujxllho6q";

const border = token.border(semantic.borderSurface1);

export const shell = {
  header: {
    actionsGap: "0.5rem",
    brand: {
      color: semantic.textColor,
      fontFamily: "var(--tbf-font-family-display, \"Poppins\", sans-serif)",
      fontSize: "1.125rem",
      fontWeight: "500",
    },
    gap: "1rem",
    link: {
      color: token.colorMix(semantic.textColor, "70%", "transparent"),
      fontWeight: "500",
      hoverBackground: semantic.surface2,
      hoverColor: semantic.textColor,
      padding: "0.5rem 0.75rem",
      radius: "0.5rem",
    },
    maxWidth: "72rem",
    menu: {
      background: token.color("white", "500"),
      border,
      footer: { border },
      link: { color: semantic.textColor, fontWeight: "500", padding: "0.625rem 0" },
    },
    paddingInline: "clamp(1rem, 3vw, 1.5rem)",
    root: {
      backdropFilter: "blur(12px)",
      background: token.colorMix(token.color("white", "500"), "85%", "transparent"),
      border,
    },
  },
};
