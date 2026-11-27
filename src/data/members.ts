import type { ImageMetadata } from "astro";
import defaultImage from "../assets/members/default.svg";

export interface Member {
	name: string;
	jobTitle: string;
	imageFilename?: string;
}

// 動的インポートのための型定義
type ImageModules = Record<string, () => Promise<{ default: ImageMetadata }>>;

// 画像ファイルの動的インポート
const imageModules: ImageModules = import.meta.glob<{ default: ImageMetadata }>(
	"../assets/members/*.{png,jpg,jpeg,svg}",
);

export const getImagePath = async (member: Member): Promise<ImageMetadata> => {
	if (member.imageFilename) {
		const imagePath = `../assets/members/${member.imageFilename}`;
		if (imagePath in imageModules) {
			const module = await imageModules[imagePath]();
			return module.default;
		}
	}
	return defaultImage;
};

export const members: Member[] = [
	{
		name: "澄川 誠治",
		jobTitle: "代表取締役 CEO",
		imageFilename: "sumigawa.jpg",
	},
	{
		name: "田辺 貴久",
		jobTitle: "取締役 COO",
		imageFilename: "tanabe.jpg",
	},
	{
		name: "佐藤 佳祐",
		jobTitle: "CTO",
		imageFilename: "sato.jpg",
	},
	{
		name: "ジョン ヘミン",
		jobTitle: "ソフトウェアエンジニア",
	},
	{
		name: "パク グニル",
		jobTitle: "ソフトウェアエンジニア",
		imageFilename: "geunil.jpg",
	},
	{
		name: "ソ イェウォン",
		jobTitle: "ソフトウェアエンジニア",
	},
	{
		name: "寺地 海渡",
		jobTitle: "ソフトウェアエンジニア",
		imageFilename: "terachi.jpg",
	},
	{
		name: "パク ゴンイル",
		jobTitle: "ソフトウェアエンジニア",
	},
	{
		name: "シン ジュンミ",
		jobTitle: "ソフトウェアエンジニア",
	},
	{
		name: "小野寺 理江",
		jobTitle: "地域活性事業部",
	},
	{
		name: "ヤン チョルウク",
		jobTitle: "ソフトウェアエンジニア",
	},
	{
		name: "石塚 昇平",
		jobTitle: "ソフトウェアエンジニア",
	},
	{
		name: "池田 咲",
		jobTitle: "地域活性事業部",
	},
];
