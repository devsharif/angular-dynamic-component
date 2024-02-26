import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './steps/component-one/component-one.component';
import { ComponentTwoComponent } from './steps/component-two/component-two.component';
import { ComponentThreeComponent } from './steps/component-three/component-three.component';
import { ComponentFourComponent } from './steps/component-four/component-four.component';
import { ComponentFiveComponent } from './steps/component-five/component-five.component';
import { FormsModule } from '@angular/forms';
import { ViewContainer } from './viewContainer.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent,
    ComponentFiveComponent,
    ViewContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent,
    ComponentFiveComponent]
})
export class AppModule { }
