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
					'This is the content of the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat, nisl vel convallis facilisis, neque lectus fringilla odio, id ullamcorper quam purus et ligula. Fusce tristique augue id sem euismod, sit amet finibus leo volutpat. Quisque bibendum justo in odio tincidunt, vel auctor enim sagittis. Vivamus vel consectetur libero. Nullam auctor commodo odio, eu fermentum eros tempus et. Aliquam nec lacus urna. Donec ultricies urna ut aliquet dapibus. In hac habitasse platea dictumst.',
				date: '2022-11-16T12:30:00Z',
			},
			{
				id: 2,
				title: 'Another Blog',
				author: 'Jane Smith',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu erat nec justo pulvinar cursus. Sed varius, leo in tristique aliquam, justo libero lacinia justo, in eleifend justo tellus nec mi. Nunc non pulvinar sem. Morbi lacinia sagittis est, vel hendrerit nulla fermentum nec. Suspendisse potenti. Suspendisse at sem eu orci sollicitudin venenatis. Ut et augue vel urna varius fermentum. Sed venenatis libero vel velit cursus congue. Integer vel augue vel justo facilisis aliquet. Integer vehicula tristique neque, vel volutpat velit malesuada nec.',
				date: '2022-11-15T10:45:00Z',
			},
			{
				id: 3,
				title: 'Exciting News',
				author: 'Bob Johnson',
				content:
					'Check out this exciting news in the tech world! Curabitur vehicula, lacus id gravida rhoncus, leo quam aliquam libero, id vestibulum purus velit vel nunc. Nunc viverra mi id nisi congue, a accumsan arcu facilisis. Integer nec nibh et quam congue fermentum nec non ex. Nam vulputate turpis eu bibendum tincidunt. Fusce tincidunt, justo ut varius efficitur, nisl odio vestibulum massa, nec hendrerit odio libero at tellus. Sed suscipit dolor eu tellus tincidunt, vitae dictum erat ultrices. Vestibulum congue euismod massa, a cursus tortor. Proin pharetra, quam id feugiat rhoncus, ligula metus accumsan est, ut interdum lacus dolor at mauris.',
				date: '2022-11-14T15:20:00Z',
			},
			{
				id: 4,
				title: 'Thoughts on Angular',
				author: 'Alice Williams',
				content:
					'Exploring the latest features in Angular. Vivamus ac nisi sed sapien fermentum rhoncus. Proin tincidunt nisl in nunc rhoncus, id vestibulum sapien pharetra. Etiam vulputate dui non mauris imperdiet, eu hendrerit lectus volutpat. Curabitur id congue orci. Ut at bibendum sapien, ac efficitur turpis. Nullam vulputate lectus at erat cursus, eget congue ligula fringilla. Sed non erat auctor, laoreet mauris a, bibendum nisi. Sed congue sapien ut eros laoreet, sit amet aliquam turpis tristique.',
				date: '2022-11-13T08:00:00Z',
			},
			{
				id: 5,
				title: 'Web Development Tips',
				author: 'Chris Davis',
				content:
					'Tips and tricks for efficient web development. Sed non cursus justo. Fusce interdum quam vel felis fermentum, ut accumsan tellus posuere. Sed eget metus ac tortor dictum aliquet. Integer luctus, erat vel ultricies malesuada, elit metus bibendum ligula, nec laoreet enim tortor et dolor. Fusce tincidunt ac sapien in fermentum. Aenean vestibulum nisl quis metus dignissim tincidunt. Sed feugiat, urna vel laoreet vulputate, libero libero vulputate odio, id cursus nunc odio nec elit. Nulla facilisi.',
				date: '2022-11-12T17:10:00Z',
			},
			{
				id: 6,
				title: 'The Future of AI',
				author: 'Alex Turner',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur sapien vitae felis tincidunt, at bibendum libero sodales. Phasellus ac tellus ut elit rhoncus fringilla. Proin ut ligula nec nisl volutpat gravida a id tellus. In nec sagittis felis. Curabitur fringilla vehicula turpis at varius. Sed tristique elit ut tempus aliquet. Suspendisse potenti. Donec ac luctus lectus. Nunc fermentum, lectus vel fermentum rhoncus, libero felis dignissim odio, ac auctor justo est vel est.',
				date: '2022-11-11T14:45:00Z',
			},
			{
				id: 7,
				title: 'A Journey into Space',
				author: 'Emily White',
				content:
					'Embark on a journey into the vastness of space. Mauris vehicula, velit nec interdum pellentesque, dolor risus consequat augue, vitae bibendum mi turpis nec urna. Vestibulum interdum euismod elit, vel ultricies nulla gravida sit amet. Ut euismod lectus non turpis volutpat, a feugiat odio malesuada. Ut ac eros nec justo venenatis blandit. Curabitur aliquam rhoncus justo, ut facilisis mi varius vitae. Nam in nibh ac orci blandit fringilla. Maecenas fermentum accumsan metus, non fermentum quam fringilla ac.',
				date: '2022-11-10T12:20:00Z',
			},
			{
				id: 8,
				title: 'The Art of Photography',
				author: 'Daniel Brown',
				content:
					'Capturing moments through the lens of a camera. Integer nec neque suscipit, lacinia justo at, pharetra sem. Nullam euismod vulputate elit vel tristique. Sed scelerisque met',
				date: '2022-11-09T08:38:00Z',
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
