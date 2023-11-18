import { Component, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog, BlogRaw } from '../blog.model';

@Component({
	selector: 'app-blog-list',
	templateUrl: './blog-list.component.html',
	styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
	constructor(private blogService: BlogService) {}

	blogs: Blog[] = [];
	selectedBlog?: Blog;

	ngOnInit(): void {
		this.getBlogs();
	}

	getBlogs(): void {
		this.blogService.getBlogs().subscribe((rawBlogs: BlogRaw[]) => {
			this.blogs = rawBlogs.map((rawBlog: BlogRaw) => ({
				...rawBlog,
				showDetail: false,
			}));
		});
	}

	onBlogClick(blog: Blog) {
		if (this.selectedBlog === blog) {
			this.selectedBlog = undefined;
		} else {
			this.selectedBlog = blog;
		}
		console.log(this.selectedBlog);
	}
}
