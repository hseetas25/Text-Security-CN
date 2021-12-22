import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextSecurityRoutingModule } from './text-security-routing.module';
import { BitStuffingComponent } from './components/bit-stuffing/bit-stuffing.component';
import { BitDestuffingComponent } from './components/bit-destuffing/bit-destuffing.component';
import { ByteStuffingComponent } from './components/byte-stuffing/byte-stuffing.component';
import { ByteDestuffingComponent } from './components/byte-destuffing/byte-destuffing.component';


@NgModule({
  declarations: [
    BitStuffingComponent,
    BitDestuffingComponent,
    ByteStuffingComponent,
    ByteDestuffingComponent
  ],
  imports: [
    CommonModule,
    TextSecurityRoutingModule
  ]
})
export class TextSecurityModule { }
