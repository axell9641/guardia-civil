import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { ModalModule } from 'ngx-bootstrap/modal';

import * as fromComponents from './components';
// import * as fromMaterialModules from './dependencies/material';
import * as fromDirectives from './directives';
import * as fromPipes from './pipes';


@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    //  ...fromMaterialModules.modules,
    // ModalModule.forChild()
  ],
  exports: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
    // ...fromMaterialModules.modules,
    ReactiveFormsModule,
    FormsModule,
    // ModalModule,
  ],
})
export class SharedModule {}
