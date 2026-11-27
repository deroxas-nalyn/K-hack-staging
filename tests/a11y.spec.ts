import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const pagePaths = [
	{ path: "/", name: "home" },
	{ path: "/about", name: "about" },
	{ path: "/members", name: "members" },
	{ path: "/news", name: "news-index" },
	{ path: "/contact", name: "contact" },
] as const;

const wcagTags = [
	"wcag2a",
	"wcag2aa",
	"wcag21a",
	"wcag21aa",
	"wcag22a",
	"wcag22aa",
];

const assertNoViolations = async (page: Page, pagePath: string) => {
	const results = await new AxeBuilder({ page })
		.withTags(wcagTags)
		.analyze();

	const violationSummary = results.violations.map((violation) => ({
		id: violation.id,
		impact: violation.impact,
		description: violation.description,
		nodes: violation.nodes.map((node) => node.target),
	}));

	expect(
		violationSummary,
		`${pagePath} で axe-core の違反が見つかりました`,
	).toEqual([]);
};

for (const pageEntry of pagePaths) {
	test(`${pageEntry.name} page has no WCAG A/AA violations`, async ({ page }) => {
		await page.goto(pageEntry.path);
		await assertNoViolations(page, pageEntry.path);
	});
}

test.describe("mobile navigation", () => {
	test.use({ viewport: { width: 390, height: 844 } });

	test("opened menu has no WCAG A/AA violations", async ({ page }) => {
		await page.goto("/");
		await page.getByRole("button", { name: "メニューを開く" }).click();
		await expect(page.getByRole("navigation", { name: "モバイルメニュー" })).toBeVisible();
		await assertNoViolations(page, "mobile-menu-open");
	});
});
