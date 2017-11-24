import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {RouterModule} from '@angular/router';
import { BlogPostService } from './blogpost.service';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogShowcaseComponent } from './blog-showcase/blog-showcase.component';
import {HttpModule} from '@angular/http';
import { UserRegisterComponent } from './user-register/user-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './authentication.service';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogComponent } from './blog/blog.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

const app_routes = [
  {path: 'home', component: BlogShowcaseComponent},
  {path: 'user/blog/:id', component: BlogComponent},
  {path: 'blog/:category', component: BlogPostComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'addBlog', component: AddBlogComponent},
  { path: '', component: BlogShowcaseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    BlogPostComponent,
    BlogShowcaseComponent,
    UserRegisterComponent,
    AddBlogComponent,
    BlogComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(app_routes),
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [BlogPostService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
