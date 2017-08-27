import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { CapitalcasePipe } from './capitalcase.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { CapitalizerComponent } from './capitalizer/capitalizer.component';
import { PanelComponent } from './panel/panel.component';
import { LikecounterComponent } from './likecounter/likecounter.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseformComponent } from './courseform/courseform.component';
import {SignupFormComponent} from './sigupform/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    CapitalcasePipe,
    FavoriteComponent,
    CapitalizerComponent,
    PanelComponent,
    LikecounterComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseformComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
