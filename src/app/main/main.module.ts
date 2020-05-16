import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ContentPageComponent } from './components/contentPage/contentPage.component';
import { LeftSidemenuComponent } from './components/leftSidemenu/leftSidemenu.component';
import { RightSidebarComponent } from './components/rightSidebar/rightSidebar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    MainComponent,
    TopbarComponent,
    ContentPageComponent,
    LeftSidemenuComponent,
    RightSidebarComponent
  ]
})
export class MainModule { }
