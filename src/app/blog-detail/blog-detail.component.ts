import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog, BlogRaw } from '../blog.model';
import { converter } from '../shared/utils';
@Component({
	selector: 'app-blog-detail',
	templateUrl: './blog-detail.component.html',
	styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent {
	constructor(private blogService: BlogService) {}

	edit: boolean = false;

	@Input() blog?: Blog;
	rawBlog?: BlogRaw;

	toggleEdit(): void {
		this.edit = !this.edit;
		console.log('toggled');
	}
	saveContent(): void {
		if (this.blog) {
			this.rawBlog = converter(this.blog);
			this.blogService
				.updateBlogs(this.rawBlog)
				.subscribe(() => console.log('succeeded put operation'));
		}
	}
}
