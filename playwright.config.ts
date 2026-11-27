import { defineConfig, devices } from "@playwright/test";

const port = 4321;

export default defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? [["html"], ["list"]] : [["list"]],
	use: {
		baseURL: `http://127.0.0.1:${port}`,
		trace: "on-first-retry",
	},
	webServer: {
		command: `pnpm build && pnpm astro preview --host 127.0.0.1 --port ${port}`,
		port,
		reuseExistingServer: !process.env.CI,
		timeout: 120000,
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
});
