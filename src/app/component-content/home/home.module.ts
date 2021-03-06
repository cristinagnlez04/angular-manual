import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { SideMenuModule } from "../../component-layout/side-menu/side-menu.module";
import { HeaderModule } from "../../component-layout/header/header.module";
import { IntroductionModule } from "../../component-content/introduction/introduction.module";

@NgModule({
  imports: [CommonModule, SideMenuModule, HeaderModule, IntroductionModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
