import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogRaw } from '../blog.model';

@Component({
	selector: 'app-blog-list',
	templateUrl: './blog-list.component.html',
	styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
	constructor(private blogService: BlogService) {}
	blogs: BlogRaw[] = [];
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
	// ngOnInit(): void {
	// 	this.getHeroes();
	// }

	// getHeroes(): void {
	// 	this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
	// }
}
