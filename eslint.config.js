import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      // 🔀 Sortează importurile
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // React first
            ["^react"],
            // Third-party modules
            ["^@?\\w"],
            // Absolute imports (ex: @/components)
            ["^@/"],
            // Relative imports
            ["^\\."],
            // Style imports last
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",

      // 🧹 Șterge importurile nefolosite
      "unused-imports/no-unused-imports": "error",

      // Dezactivează regula default ESLint
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Înlocuită cu versiunea smart de la unused-imports
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
]);
