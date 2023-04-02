import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { LinkMenuComponent } from './link-menu/link-menu.component';
import { SelectLangComponent } from './select-lang/select-lang.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LinkMenuComponent,
    SelectLangComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LinkMenuComponent,
    SelectLangComponent
  ]
})
export class SharedModule { }
