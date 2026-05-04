import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Peter Adedokun Portfolio",
    short_name: "Peter Portfolio",
    description:
      "Frontend engineer portfolio focused on React, Next.js, TypeScript, and premium product interfaces.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c8ff00",
    icons: [],
  };
}
