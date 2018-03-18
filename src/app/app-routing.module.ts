import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeComponent } from './components/layouts/home/home.component';
import { LayoutPostComponent } from './components/layouts/post/post.component';
import { LayoutPageComponent } from './components/layouts/page/page.component';
import { LayoutCategoryComponent } from './components/layouts/category/category.component';
import { LayoutMediaComponent } from './components/layouts/media/media.component';

const appRoutes: Routes = [
  { path: '', component: LayoutHomeComponent },
  { path: 'posts', component: LayoutPostComponent },
  { path: 'posts/:postId', component: LayoutPostComponent },
  { path: 'pages', component: LayoutPageComponent },
  { path: 'pages/:pageId', component: LayoutPageComponent },
  { path: 'categories', component: LayoutCategoryComponent },
  { path: 'categories/:categoryId', component: LayoutCategoryComponent },
  { path: 'media', component: LayoutMediaComponent },
  { path: 'media/:mediaId', component: LayoutMediaComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
