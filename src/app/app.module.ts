import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { CapitalcasePipe } from './capitalcase.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { CapitalizerComponent } from './capitalizer/capitalizer.component';
import { PanelComponent } from './panel/panel.component';
import { LikecounterComponent } from './likecounter/likecounter.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    CapitalcasePipe,
    FavoriteComponent,
    CapitalizerComponent,
    PanelComponent,
    LikecounterComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
