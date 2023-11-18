import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

// const routes: Routes = [
// 	{ path: '', redirectTo: '/list', pathMatch: 'full' },
// 	{ path: 'list', component: BlogListComponent },
// 	{ path: 'blog/:id', component: BlogDetailComponent },
// ];

@NgModule({
	// imports: [RouterModule.forRoot(routes)],
	// exports: [RouterModule],
})
export class AppRoutingModule {}
