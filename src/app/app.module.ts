import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutsModule } from './components/layouts.module';
import { AppRoutingModule } from './app.routes';
import { PizzaService } from './services/pizza.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutsModule, AppRoutingModule],
  providers: [PizzaService, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
