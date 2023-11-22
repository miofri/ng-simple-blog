export interface BlogRaw {
	id: number;
	title: string;
	author: string;
	content: string;
	date: Date;
	tags: string[];
}
export interface Blog extends BlogRaw {
	showDetail: boolean;
}
