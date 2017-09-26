import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedComponent } from './featured/featured.component';
import { SportsComponent } from './sports/sports.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AdminComponent }   from './admin/admin.component';

const routes: Routes = [
  {
    path:'featured',
    component: FeaturedComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
