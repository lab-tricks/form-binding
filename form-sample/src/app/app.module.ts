import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextboxComponent } from './components/textbox.component';
import { ContactSampleComponent } from './contact-sample/contact-sample.component';
import { NavigationMenu } from './side-navigation-menu/navigation-menu/navigation-menu.component';
import { SubmenuList } from './side-navigation-menu/submenu-list/submenu-list.component';
import { LinkItem } from './side-navigation-menu/link-item/link-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactSampleComponent,
    TextboxComponent,
    NavigationMenu,
    SubmenuList,
    LinkItem
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
