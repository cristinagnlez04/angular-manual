import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SideMenuComponent } from "./component-layout/side-menu/side-menu.component";
import { HomeComponent } from "./component-content/home/home.component";
import { IntroductionComponent } from "./component-content/introduction/introduction.component";

const app_routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "side", component: SideMenuComponent },
  { path: "home", component: HomeComponent },
  { path: "introduction", component: IntroductionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
