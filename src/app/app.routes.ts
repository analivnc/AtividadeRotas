import { Routes } from '@angular/router';
import { UsersList } from './pages/users-list/users-list';
import { UserDetailComponent } from './pages/user-detail/user-detail';


export const routes: Routes = [
  { 
    path: 'users', 
    component: UsersList
  },

  { 
    path: 'users/:id', 
    component: UserDetailComponent 
  },

  {
    path: '**',
    redirectTo: 'users'
  }
];