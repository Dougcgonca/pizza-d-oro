import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InitialScreenComponent, MenuComponent],
  imports: [CommonModule],
  exports: [InitialScreenComponent, MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutsModule {}
