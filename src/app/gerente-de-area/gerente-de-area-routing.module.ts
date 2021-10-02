import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenteDeAreaPage } from './gerente-de-area.page';

const routes: Routes = [
  {
    path: '',
    component: GerenteDeAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenteDeAreaPageRoutingModule {}
