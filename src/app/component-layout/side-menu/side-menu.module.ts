import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideMenuComponent } from "./side-menu.component";
import { AppRoutingModule } from "../../app-routing.module";

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent]
})
export class SideMenuModule {}
