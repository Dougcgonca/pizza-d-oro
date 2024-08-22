import { RouterModule, Routes } from '@angular/router';
import { InitialScreenComponent } from './components/initial-screen/initial-screen.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: '', component: InitialScreenComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
