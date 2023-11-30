import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { homeRoutes } from './home.routes';

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
})
export class HomeModule {}
