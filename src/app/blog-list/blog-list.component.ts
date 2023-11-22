import {
	Component,
	EventEmitter,
	Output,
	ViewChild,
	ElementRef,
} from '@angular/core';
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
	addNewEntry: boolean = false;

	@ViewChild('newBlogText') newBlogText!: ElementRef<HTMLTextAreaElement>;
	@ViewChild('newBlogTitle') newBlogTitle!: ElementRef<HTMLInputElement>;
	@ViewChild('newBlogAuthor') newBlogAuthor!: ElementRef<HTMLInputElement>;

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
		this.addNewEntry = false;
	}

	toggleNewEntry() {
		this.selectedBlog = undefined;
		this.addNewEntry = !this.addNewEntry;
	}

	addNewBlog(title: string, content: string, author: string) {
		title = title.trim();
		content = content.trim();
		author = author.trim();
		const date: Date = new Date();

		if (!title || !content || !author) {
			window.alert('Please fill in all boxes.');
			return;
		} else {
			this.blogService
				.addBlog({ title, content, author, date } as BlogRaw)
				.subscribe((blog) => {
					const convertedBlog: Blog = { ...blog, showDetail: false };
					this.blogs.push(convertedBlog);
				});
			this.newBlogText.nativeElement.value = '';
			this.newBlogTitle.nativeElement.value = '';
			this.newBlogAuthor.nativeElement.value = '';
		}
	}
}
