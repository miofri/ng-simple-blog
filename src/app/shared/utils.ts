import { Blog, BlogRaw } from '../blog.model';

export const converter = (blog: Blog): BlogRaw => {
	const { showDetail, ...blogRaw } = blog;
	return blog;
};
