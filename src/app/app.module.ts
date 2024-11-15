import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { SettingsComponent } from './settings/settings.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { DynamicMenuItemComponent } from './dynamic-menu-item/dynamic-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MegamenuComponent,
    SettingsComponent,
    DynamicMenuItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  exports: [MegamenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
