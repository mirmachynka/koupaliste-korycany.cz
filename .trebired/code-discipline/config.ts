import { defineConfig } from "@trebired/code-discipline";

export default defineConfig({
    presets: {
      use: ["@trebired/configs"],
    },
    rules: {
      bannedPatterns: {
        patterns: [
          { value: "koupaliste-korycany.cz", allowedFiles: ["package.json"] },
        ],
      },
    },
});
