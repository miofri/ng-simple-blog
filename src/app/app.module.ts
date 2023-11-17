import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

@NgModule({
	declarations: [
		AppComponent,
		BlogListComponent,
		BlogDetailComponent,
		BlogCreateComponent,
		BlogEditComponent,
	],
	imports: [
		BrowserModule,
		HttpClient,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
			dataEncapsulation: false,
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
