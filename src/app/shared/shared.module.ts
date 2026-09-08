import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { LinkMenuComponent } from './link-menu/link-menu.component';
import { SelectLangComponent } from './select-lang/select-lang.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinkHeaderComponent } from './link-header/link-header.component';
import { RouterModule } from '@angular/router';
import { DecorateComponent } from './decorate/decorate.component';
import { TitleComponent } from './title/title.component';
import { TextComponent } from './text/text.component';
import { ArrowScrollComponent } from './arrow-scroll/arrow-scroll.component';
import { TranslatePipe } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { SliderUsersComponent } from './slider-users/slider-users.component';
import { MemberComponent } from './member/member.component';
import { UserTitlePageComponent } from './user-title-page/user-title-page.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { UsersInProjectComponent } from './users-in-project/users-in-project.component';
import { LinksProjectComponent } from './links-project/links-project.component';
import { ContactLinksComponent } from './contact-links/contact-links.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LinkMenuComponent,
    SelectLangComponent,
    LinkHeaderComponent,
    DecorateComponent,
    TitleComponent,
    TextComponent,
    ArrowScrollComponent,
    SliderUsersComponent,
    MemberComponent,
    UserTitlePageComponent,
    InfoUserComponent,
    UsersInProjectComponent,
    LinksProjectComponent,
    ContactLinksComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslatePipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LinkMenuComponent,
    SelectLangComponent,
    LinkHeaderComponent,
    DecorateComponent,
    TitleComponent,
    TextComponent,
    ArrowScrollComponent,
    SliderUsersComponent,
    MemberComponent,
    UserTitlePageComponent,
    InfoUserComponent,
    UsersInProjectComponent,
    LinksProjectComponent,
    ContactLinksComponent,
    ContactFormComponent,
    TranslatePipe
  ]
})
export class SharedModule { }
