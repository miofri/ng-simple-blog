import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		BlogListComponent,
		BlogDetailComponent,
		BlogCreateComponent,
		BlogEditComponent,
	],
	imports: [
		MatCardModule,
		MatListModule,
		MatIconModule,
		BrowserModule,
		DatePipe,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
			dataEncapsulation: false,
		}),
		BrowserAnimationsModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
