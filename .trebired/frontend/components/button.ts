import type { FrontendPaletteStep } from "@trebired/frontend/config";

import { palette } from "#q05j163jw0u4";
import { semantic, token, ui } from "#uddujxllho6q";

const white = token.color("white", "500");
const primary = token.color("primary", "500");
const neutral = (step: FrontendPaletteStep<typeof palette, "neutral">) => token.color("neutral", step);

export const button = {
  root: {
    background: "transparent",
    border: "1px solid transparent",
    color: semantic.textColor,
    fontFamily: ui.fontSans,
    fontWeight: "600",
    gap: "0.5rem",
    letterSpacing: "0",
    paddingBlock: "0",
    radius: "0.5rem",
    textTransform: "none",
    whiteSpace: "nowrap",
  },
  sizes: {
    lg: { fontSize: "1rem", height: "3rem", paddingInline: "1.75rem" },
    md: { fontSize: "0.875rem", height: "2.5rem", paddingInline: "1rem" },
    sm: { fontSize: "0.8rem", height: "2.25rem", paddingInline: "0.875rem" },
  },
  tones: {
    chip: {
      background: white,
      borderColor: semantic.borderSurface1,
      borderWidth: "1px",
      color: semantic.textColor,
      states: {
        hover: { background: semantic.surface2, borderColor: semantic.borderSurface1, color: semantic.textColor },
      },
    },
    highlight: {
      background: primary,
      borderColor: primary,
      color: white,
      states: {
        hover: { background: token.colorMix(primary, "92%", "white"), borderColor: token.colorMix(primary, "92%", "white"), color: white },
      },
    },
    outline: {
      background: "transparent",
      borderColor: token.colorMix(white, "20%", "transparent"),
      color: white,
      states: {
        hover: {
          background: token.colorMix(white, "10%", "transparent"),
          borderColor: token.colorMix(white, "30%", "transparent"),
          color: white,
        },
      },
    },
    white: {
      background: white,
      borderColor: white,
      color: neutral("900"),
      states: {
        hover: { background: neutral("100"), borderColor: neutral("100"), color: neutral("900") },
      },
    },
  },
};
