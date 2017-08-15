import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { CapitalcasePipe } from './capitalcase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    CapitalcasePipe
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
