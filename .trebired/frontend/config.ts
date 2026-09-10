import { defineConfig } from "@trebired/frontend/config";

import { ALL_ICON_SPECS } from "#ax5z6rnbca47";

import { components } from "./components";
import { palette } from "./palette";
import { systems } from "./systems";
import { interactions, runtime, semantics } from "./theme";
import { breakpoints, typography } from "./typography";

export default defineConfig({
    forVersion: "12.17.1",
    assets: {
      favicon: {
        default: "src/brand/favicon.svg",
      },
      fonts: {
        families: {
          display: {
            display: "swap",
            family: "Poppins",
            fontsource: "poppins",
            styles: ["normal"],
            subsets: ["latin", "latin-ext"],
            weights: [500, 600, 700, 800],
          },
          text: {
            display: "swap",
            family: "Inter",
            fontsource: "inter",
            styles: ["normal"],
            subsets: ["latin", "latin-ext"],
            weights: [400, 500, 600, 700, 800],
          },
        },
        sans: "Inter, ui-sans-serif, system-ui, sans-serif",
      },
      icons: {
        endpoint: false,
        mode: "static",
        packs: ["remixicon"],
        specs: ALL_ICON_SPECS,
      },
    },
    components: { ...components, typography },
    design: {
      breakpoints,
      interactions,
      palette,
      scrollBehavior: "smooth",
      semantics,
    },
    runtime,
    systems,
});
