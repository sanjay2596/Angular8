import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { BlogInnerComponent } from './components/blog-inner/blog-inner.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{path:'home', component:AppLayoutComponent},
{path:'blog/:id',component:BlogInnerComponent},
{ path:"",component:HomeComponent},
{ path:"add-blog",component:AddBlogComponent},
{ path:":id", component:BlogViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
