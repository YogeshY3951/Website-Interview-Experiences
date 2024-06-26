import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ShowBlogComponent } from './components/show-blog/show-blog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogsListComponent } from './components/blogs-list/blogs-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomePageComponent,
    CreateBlogComponent,
    SidebarComponent,
    ShowBlogComponent,
    BlogsListComponent,
    ContactUsComponent,
    AboutPageComponent,
    EditProfileComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AngularEditorModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
