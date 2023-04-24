import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AboutusDetailComponent } from './pages/aboutus-detail/aboutus-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about-us",
    component: AboutusComponent
  },
  {
    path: "about-us/:name",
    component: AboutusDetailComponent
  },
  {
    path: "projects/:name",
    component: HomeComponent
  },
  {
    path: "contact-us",
    component: HomeComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
