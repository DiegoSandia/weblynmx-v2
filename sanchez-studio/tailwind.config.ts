import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Un solo acento en todo el sitio (terracota). El resto es papel + tinta.
        paper: "#FBFAF8",
        "paper-dim": "#F3F1ED",
        ink: "#12110F",
        "ink-soft": "#3A3833",
        muted: "#75716A",
        line: "#E4E0D9",
        accent: "#D24A29",
        "accent-light": "#EE7550",
        "accent-soft": "#F6E3DC",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        // Escala editorial: saltos grandes entre cuerpo y titulares.
        display: ["clamp(2.15rem, 6.4vw, 5.6rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        title: ["clamp(1.8rem, 4.4vw, 3.4rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        lede: ["clamp(1.15rem, 2.1vw, 1.6rem)", { lineHeight: "1.4", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        shell: "78rem",
        prose: "62ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
