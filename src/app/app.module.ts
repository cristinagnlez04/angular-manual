import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./component-content/home/home.module";
import { IntroductionModule } from "./component-content/introduction/introduction.module";
import { InstallationComponent } from "./component-content/installation/installation.component";
import { BasicCommandsComponent } from "./component-content/basic-commands/basic-commands.component";
import { ComponentCreationComponent } from './component-content/component-creation/component-creation.component';
import { ImportsComponent } from './component-content/imports/imports.component';

@NgModule({
  declarations: [AppComponent, InstallationComponent, BasicCommandsComponent, ComponentCreationComponent, ImportsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HomeModule,
    IntroductionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
