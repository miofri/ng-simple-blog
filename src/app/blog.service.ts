import { Injectable } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BlogRaw } from './blog.model';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
	providedIn: 'root',
})
export class BlogService {
	constructor(private http: HttpClient) {}

	private blogsUrl = 'api/blogs';

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
	};

	getBlogs(): Observable<BlogRaw[]> {
		return this.http
			.get<BlogRaw[]>(this.blogsUrl)
			.pipe(catchError(this.handleError<BlogRaw[]>('getBlogs', [])));
	}

	updateBlog(blog: BlogRaw): Observable<any> {
		return this.http
			.put(this.blogsUrl, blog, this.httpOptions)
			.pipe(catchError(this.handleError<any>('updateBlog')));
	}

	addBlog(blog: BlogRaw): Observable<BlogRaw> {
		return this.http
			.post<BlogRaw>(this.blogsUrl, blog, this.httpOptions)
			.pipe(catchError(this.handleError<any>('addBlog')));
	}

	deleteBlog(id: number): Observable<BlogRaw> {
		return this.http
			.delete<BlogRaw>(`${this.blogsUrl}/${id}`, this.httpOptions)
			.pipe(catchError(this.handleError<any>('deleteBlog')));
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 *
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			// this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
