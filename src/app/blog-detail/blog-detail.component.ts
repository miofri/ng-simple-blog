import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
	rawBlog?: BlogRaw;

	@Input() blog?: Blog;
	@Output() emitDeleteClick = new EventEmitter();

	toggleEdit(): void {
		this.edit = !this.edit;
	}
	saveContent(): void {
		if (this.blog) {
			this.rawBlog = converter(this.blog);
			this.blogService
				.updateBlog(this.rawBlog)
				.subscribe(() => console.log('succeeded put operation'));
		}
	}
	onDeleteClick() {
		this.emitDeleteClick.emit(this.blog?.id!);
	}
}
