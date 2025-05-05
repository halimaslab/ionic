import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatkulPageRoutingModule } from './matkul-routing.module';

import { MatkulPage } from './matkul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatkulPageRoutingModule
  ],
  // declarations: [MatkulPage]
})
export class MatkulPageModule {}
