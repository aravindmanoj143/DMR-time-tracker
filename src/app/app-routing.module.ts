import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'permission',
    loadChildren: () => import('./permission/permission.module').then( m => m.PermissionPageModule)
  },
  {
    path: 'onduty',
    loadChildren: () => import('./onduty/onduty.module').then( m => m.OndutyPageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./leave/leave.module').then( m => m.LeavePageModule)
  },
  {
    path: 'emergencyleave',
    loadChildren: () => import('./emergencyleave/emergencyleave.module').then( m => m.EmergencyleavePageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
