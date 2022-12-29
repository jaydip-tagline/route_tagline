import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: 'service',
    component: ServiceComponent,
    children: [
      {
        path: 'service/:type',
        component: ServiceComponent,
      },
    ],
  },
  {
    path: 'aboutus',
    component: AboutComponent,
  },
  // {
  //   path: '**',
  //   component: ServiceComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
