import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

//component
import {CategoriesComponent} from './categories/categories.component';
import {ProductComponent} from './product/product.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PostComponent} from './post/post.component';
import {Page404Component} from './page404/page404.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'danh-muc/:id', component: CategoriesComponent
  },
  {
    path: 'san-pham/:id', component: ProductComponent
  },
  {
    path: 'tin-tuc/:id', component: PostComponent
  },
  {
    path: 'lien-he.html', component: ContactComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '**', component:  Page404Component
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
