import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import {CapitalcasePipe} from './capitalcase.pipe';
import {FavoriteComponent} from './favorite/favorite.component';
import {CapitalizerComponent} from './capitalizer/capitalizer.component';
import {PanelComponent} from './panel/panel.component';
import {LikecounterComponent} from './likecounter/likecounter.component';
import {InputFormatDirective} from './input-format.directive';
import {ZippyComponent} from './zippy/zippy.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {CourseformComponent} from './courseform/courseform.component';
import {SignupFormComponent} from './sigupform/signup-form.component';
import {NewCourseFormComponentComponent} from './new-course-form-component/new-course-form-component.component';
import {ChangePasswordFormComponent} from './change-password-form/change-password-form.component';
import {PostsComponent} from './posts/posts.component';
import {HttpModule} from '@angular/http';
import {ImgurComponent} from './imgur/imgur.component';
import {PostService} from './services/post.service';
import {AppErrorHandler} from './common/app-error-handler';
import {ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import {GithubService} from './services/github.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    CapitalcasePipe,
    FavoriteComponent,
    CapitalizerComponent,
    PanelComponent,
    LikecounterComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseformComponent,
    SignupFormComponent,
    NewCourseFormComponentComponent,
    ChangePasswordFormComponent,
    PostsComponent,
    ImgurComponent,
    GithubfollowersComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToasterModule,
    RouterModule.forRoot([
      {
        path: '', //none of the routes starts with /
        component: HomeComponent
      },
      {
        path: 'followers', //none of the routes starts with /
        component: GithubfollowersComponent
      },
      {
        path: 'followers/:username', //none of the routes starts with /
        component: GithubProfileComponent
      },
      {
        path: 'posts', //none of the routes starts with /
        component: PostsComponent
      },
      {
        path: '**', //none of the routes starts with /
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    PostService,
    GithubService,
    {
      provide: ErrorHandler, useClass: AppErrorHandler //use AppErrorHandler where ErrorHandler is used by Angular
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
