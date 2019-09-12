import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SideMenuComponent } from "./component-layout/side-menu/side-menu.component";
import { HomeComponent } from "./component-content/home/home.component";
import { IntroductionComponent } from "./component-content/introduction/introduction.component";
import { InstallationComponent } from "./component-content/installation/installation.component";
import { BasicCommandsComponent } from "./component-content/basic-commands/basic-commands.component";
import { ComponentCreationComponent } from "./component-content/component-creation/component-creation.component";
import { ImportsComponent } from "./component-content/imports/imports.component";
import { CommunicationComponentsComponent } from "./component-content/communication-components/communication-components.component";
import { ShowDataComponent } from "./component-content/show-data/show-data.component";
import { TablesComponent } from "./component-content/tables/tables.component";
import { FormsComponent } from "./component-content/forms/forms.component";
import { ReactiveProgrammingComponent } from "./component-content/reactive-programming/reactive-programming.component";
import { HTTPObservablesComponent } from "./component-content/http-observables/http-observables.component";

const app_routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "side", component: SideMenuComponent },
  { path: "home", component: HomeComponent },
  { path: "introduction", component: IntroductionComponent },
  { path: "installation", component: InstallationComponent },
  { path: "basic-commands", component: BasicCommandsComponent },
  { path: "component-creation", component: ComponentCreationComponent },
  { path: "imports", component: ImportsComponent },
  {
    path: "comunication-components",
    component: CommunicationComponentsComponent
  },
  { path: "show-data", component: ShowDataComponent },
  { path: "tables", component: TablesComponent },
  { path: "forms", component: FormsComponent },
  { path: "tables", component: TablesComponent },
  { path: "forms", component: FormsComponent },
  { path: "reactive-programming", component: ReactiveProgrammingComponent },
  { path: "http-observables", component: HTTPObservablesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
