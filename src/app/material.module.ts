import {NgModule} from '@angular/core';

import {
  MatIconModule,
  MdButtonModule,
  MatInputModule
} from '@angular/material';

import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  exports: [
    MatIconModule,
    MdButtonModule,
    MatInputModule,
    ObserversModule,
    PlatformModule
  ]
})
export class CustomMaterialModule {}
