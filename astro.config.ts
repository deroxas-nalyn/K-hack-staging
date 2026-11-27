import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: 'https://deroxas-nalyn.github.io',
  	base: '/K-hack-staging',
	trailingSlash: 'always',
	// site: "https://k-hack.co.jp",
	integrations: [],
	markdown: {
		shikiConfig: {
			theme: "github-light",
			wrap: true,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});