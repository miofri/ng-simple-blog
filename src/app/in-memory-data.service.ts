import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Blog, BlogRaw } from './blog.model';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const blogs = [
			{
				id: 1,
				title: 'First Blog Post',
				author: 'John Doe',
				content:
					'This is the content of the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
				date: '2022-11-16T12:30:00Z',
				tags: ['technology', 'programming'],
			},
			{
				id: 2,
				title: 'Another Blog',
				author: 'Jane Smith',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu erat nec justo pulvinar cursus...',
				date: '2022-11-15T10:45:00Z',
				tags: ['random', 'thoughts'],
			},
			{
				id: 3,
				title: 'Exciting News',
				author: 'Bob Johnson',
				content:
					'Check out this exciting news in the tech world! Curabitur vehicula, lacus id gravida rhoncus, leo quam aliquam libero...',
				date: '2022-11-14T15:20:00Z',
				tags: ['technology', 'web-development'],
			},
			{
				id: 4,
				title: 'Thoughts on Angular',
				author: 'Alice Williams',
				content:
					'Exploring the latest features in Angular. Vivamus ac nisi sed sapien fermentum rhoncus. Proin tincidunt nisl in nunc rhoncus...',
				date: '2022-11-13T08:00:00Z',
				tags: ['technology', 'programming'],
			},
			{
				id: 5,
				title: 'Web Development Tips',
				author: 'Chris Davis',
				content:
					'Tips and tricks for efficient web development. Sed non cursus justo. Fusce interdum quam vel felis fermentum...',
				date: '2022-11-12T17:10:00Z',
				tags: ['web-development', 'programming'],
			},
			{
				id: 6,
				title: 'The Future of AI',
				author: 'Alex Turner',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur sapien vitae felis tincidunt...',
				date: '2022-11-11T14:45:00Z',
				tags: ['thoughts', 'technology'],
			},
			{
				id: 7,
				title: 'A Journey into Space',
				author: 'Emily White',
				content:
					'Embark on a journey into the vastness of space. Mauris vehicula, velit nec interdum pellentesque...',
				date: '2022-11-10T12:20:00Z',
				tags: ['random', 'web-development'],
			},
			{
				id: 8,
				title: 'The Art of Photography',
				author: 'Daniel Brown',
				content:
					'Capturing moments through the lens of a camera. Integer nec neque suscipit, lacinia justo at...',
				date: '2022-11-09T08:38:00Z',
				tags: ['random', 'thoughts'],
			},
		];
		return { blogs };
	}
	// Overrides the genId method to ensure that a hero always has an id.
	// If the heroes array is empty,
	// the method below returns the initial number (11).
	// if the heroes array is not empty, the method below returns the highest
	// hero id + 1.
	genId(blogs: BlogRaw[]): number {
		return blogs.length > 0 ? Math.max(...blogs.map((blog) => blog.id)) + 1 : 1;
	}
}
