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
import { CommunicationComponentsComponent } from './component-content/communication-components/communication-components.component';
import { ShowDataComponent } from './component-content/show-data/show-data.component';
import { TablesComponent } from './component-content/tables/tables.component';
import { FormsComponent } from './component-content/forms/forms.component';
import { ReactiveProgrammingComponent } from './component-content/reactive-programming/reactive-programming.component';
import { HTTPObservablesComponent } from './component-content/http-observables/http-observables.component';

@NgModule({
  declarations: [AppComponent, InstallationComponent, BasicCommandsComponent, ComponentCreationComponent, ImportsComponent, CommunicationComponentsComponent, ShowDataComponent, TablesComponent, FormsComponent, ReactiveProgrammingComponent, HTTPObservablesComponent],
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
