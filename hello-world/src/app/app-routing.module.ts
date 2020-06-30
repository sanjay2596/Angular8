import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { BlogInnerComponent } from './components/blog-inner/blog-inner.component';


const routes: Routes = [
{path: '', redirectTo:'/home', pathMatch: 'full'},
{path:'home', component:AppLayoutComponent},
{path:'blog/:id',component:BlogInnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
