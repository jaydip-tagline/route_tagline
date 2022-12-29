import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HeaderComponent, ServiceComponent, AboutComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
