/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

// eslint-disable-next-line no-undef
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}"
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        "sans": [
          "Inter",
          ...defaultTheme.fontFamily.sans
        ]
      },
      width: {
        "calc-100-minus-32": "calc(100% - 32px)",
        "calc-100-minus-256": "calc(100% - 256px)"
      },
      boxShadow: {
        "popover": "var(--nt-popover-shadow)"
      },
      borderRadius: {
        "popover": "var(--nt-popover-rounded)",
        "input": "var(--nt-input-rounded)"
      },
      colors: {
        background: "var(--nt-background)",
        foreground: "var(--nt-foreground)",
        primary: {
          DEFAULT: "var(--nt-button-primary)",
          foreground: "var(--nt-button-primary-foreground)"
        },
        secondary: {
          DEFAULT: "var(--nt-button-secondary)",
          foreground: "var(--nt-button-secondary-foreground)"
        },
        destructive: {
          DEFAULT: "var(--nt-destructive)",
          foreground: "var(--nt-destructive-foreground)"
        },
        accent: {
          DEFAULT: "var(--nt-hover)",
          foreground: "var(--nt-paragraph)"
        },
        muted: "var(--nt-muted)",
        paragraph: "var(--nt-paragraph)",
        link: "var(--nt-link)",
        ring: "var(--nt-ring)",
        hover: "var(--nt-hover)",
        border: "var(--nt-border)",
        elevated: "var(--nt-elevated)",
        hairline: "var(--nt-hairline)",
        positive: "var(--nt-positive)",
        negative: "var(--nt-negative)",
        attention: "var(--nt-attention)",
        "button-primary": "var(--nt-button-primary)",
        "button-primary-foreground": "var(--nt-button-primary-foreground)",
        "button-primary-hover": "var(--nt-button-primary-hover)",
        "button-primary-border": "var(--nt-button-primary-border)",
        "button-secondary": "var(--nt-button-secondary)",
        "button-secondary-foreground": "var(--nt-button-secondary-foreground)",
        "button-secondary-hover": "var(--nt-button-secondary-hover)",
        "button-secondary-border": "var(--nt-button-secondary-border)",
        "button-ghost": "var(--nt-button-ghost)",
        "button-ghost-foreground": "var(--nt-button-ghost-foreground)",
        "button-ghost-hover": "var(--nt-button-ghost-hover)",
        "button-ghost-border": "var(--nt-button-ghost-border)",
        "button-destructive": "var(--nt-button-destructive)",
        "button-destructive-foreground": "var(--nt-button-destructive-foreground)",
        "button-destructive-hover": "var(--nt-button-destructive-hover)",
        "button-destructive-border": "var(--nt-button-destructive-border)",
        select: "var(--nt-select)",
        input: "var(--nt-input)",
        "input-foreground": "var(--nt-input-foreground)",
        "input-placeholder": "var(--nt-input-placeholder)",
        "input-border": "var(--nt-input-border)",
        "input-destructive-border": "var(--nt-button-destructive-border)",
        popover: "var(--nt-popover)",
        "popover-foreground": "var(--nt-popover-foreground)",
        "popover-hover": "var(--nt-popover-hover)"
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")]
};
