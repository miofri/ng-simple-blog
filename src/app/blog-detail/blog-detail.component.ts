import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog, BlogRaw } from '../blog.model';
@Component({
	selector: 'app-blog-detail',
	templateUrl: './blog-detail.component.html',
	styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent {
	constructor() {}

	@Input() blog?: Blog;
}
