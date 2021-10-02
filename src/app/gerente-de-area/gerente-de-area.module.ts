import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenteDeAreaPageRoutingModule } from './gerente-de-area-routing.module';

import { GerenteDeAreaPage } from './gerente-de-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenteDeAreaPageRoutingModule
  ],
  declarations: [GerenteDeAreaPage]
})
export class GerenteDeAreaPageModule {}
