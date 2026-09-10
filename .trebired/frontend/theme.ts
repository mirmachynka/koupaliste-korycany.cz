import type { FrontendDesignConfig, FrontendDesignInteractionsConfig, FrontendRuntimeConfig, FrontendThemeConfig } from "@trebired/frontend/config";

export const theme = {
  dark: "light",
  defaultMode: "light",
  light: "light",
  modes: {
    light: { scheme: "light" },
  },
} satisfies FrontendThemeConfig;

export const interactions = {
  activePress: {
    enabled: false,
  },
} satisfies FrontendDesignInteractionsConfig;

export const semantics = {
  anchorOffset: "5rem",
  heading: {
    fontWeight: "500",
  },
  selection: {
    bg: "#e8f1f8",
    text: "#203348",
  },
  transitionFast: "120ms",
} satisfies NonNullable<FrontendDesignConfig["semantics"]>;

export const runtime = {
  theme,
} satisfies FrontendRuntimeConfig;
