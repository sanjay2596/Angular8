import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
{path:'home', component:AppLayoutComponent},
{ path:"",component:LoginComponent},
{ path:"add-blog",component:AddBlogComponent},
{ path:"blog/:id", component:BlogViewComponent },
{ path:"blog",component:HomeComponent},
{ path:"addUser",component:AdminComponent},
{ path:"users",component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
