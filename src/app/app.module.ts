import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostSingleComponent } from './components/posts/post-single/post-single.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PageListComponent } from './components/pages/page-list/page-list.component';
import { PageSingleComponent } from './components/pages/page-single/page-single.component';
import { MediaSingleComponent } from './components/media/media-single/media-single.component';
import { MediaListComponent } from './components/media/media-list/media-list.component';
import { CategorySingleComponent } from './components/categories/category-single/category-single.component';
import { CategoryListComponent } from './components/categories/category-list/category-list.component';
import { SiteHeaderComponent } from './components/partials/site-header/site-header.component';
import { SiteNavigationComponent } from './components/partials/site-navigation/site-navigation.component';
import { SiteFooterComponent } from './components/partials/site-footer/site-footer.component';
import { LayoutHomeComponent } from './components/layouts/home/home.component';
import { LayoutPageComponent } from './components/layouts/page/page.component';
import { LayoutPostComponent } from './components/layouts/post/post.component';
import { LayoutCategoryComponent } from './components/layouts/category/category.component';
import { LayoutMediaComponent } from './components/layouts/media/media.component';

import { AppService } from './services/app.service';
import { PostService } from './services/post.service';
import { PageService } from './services/page.service';
import { MediaService } from './services/media.service';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    PostSingleComponent,
    PostListComponent,
    PageListComponent,
    PageSingleComponent,
    MediaSingleComponent,
    MediaListComponent,
    CategorySingleComponent,
    CategoryListComponent,
    SiteHeaderComponent,
    SiteNavigationComponent,
    SiteFooterComponent,
    LayoutHomeComponent,
    LayoutPageComponent,
    LayoutPostComponent,
    LayoutCategoryComponent,
    LayoutMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppService,
    PostService,
    PageService,
    MediaService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
