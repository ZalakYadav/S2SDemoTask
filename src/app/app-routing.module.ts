import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MegamenuComponent } from './megamenu/megamenu.component';

@NgModule({
  imports: [
      RouterModule.forRoot([
          {
              path: '', component: MegamenuComponent,
          },
         
      ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
