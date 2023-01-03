import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Features/about/about.component';
import { DynamiceditComponent } from './Features/dynamicedit/dynamicedit.component';
import { HomeComponent } from './Features/home/home.component';
import { Child1Component } from './Features/service/child1/child1.component';
import { Child2Component } from './Features/service/child2/child2.component';
import { ServiceComponent } from './Features/service/service.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('../app/Features/user/user.module').then((x) => x.UserModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'service',
    loadChildren: () =>
      import('../app/servicelist/servicelist.module').then(
        (z) => z.ServicelistModule
      ),
  },
  // children: [
  //   {
  //     path: 'service/:type',
  //     component: ServiceComponent,
  //   },
  // ],
  {
    path: 'aboutus',
    component: TemplateformComponent,
  },
  {
    path: 'edit/:id',
    component: DynamiceditComponent,
  },
  {
    path: 'contact',
    component: ServiceComponent,
    children: [
      {
        path: 'head',
        component: Child1Component,
      },
      {
        path: 'tail',
        component: Child2Component,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
