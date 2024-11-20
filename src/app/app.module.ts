import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
@NgModule({
  declarations: [
    AppComponent,
    MegamenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  exports: [MegamenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
