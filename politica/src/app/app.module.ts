import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//import Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DebateComponent } from './components/debate/debate.component';
import { NewsComponent } from './components/news/news.component';
import { VoteComponent } from './components/vote/vote.component';
import { ProfilComponent } from './components/profil/profil.component';
import { MenuComponent } from './utils/menu/menu.component';
import { Error404Component } from './utils/error404/error404.component';
import { DebateDetailsComponent } from './components/debate-details/debate-details.component';

//import primeNG
import { AvatarModule } from "primeng/avatar";
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CaptchaModule } from 'primeng/captcha';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ImageModule } from 'primeng/image';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BadgeModule } from 'primeng/badge';
import { SourceComponent } from './components/source/source.component';
import { DebateSourceComponent } from './components/debate-source/debate-source.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DebateComponent,
    NewsComponent,
    VoteComponent,
    ProfilComponent,
    MenuComponent,
    Error404Component,
    DebateDetailsComponent,
    SourceComponent,
    DebateSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AvatarModule,
    CardModule,
    AutoCompleteModule,
    InputTextModule,
    ButtonModule,
    InputSwitchModule,
    TooltipModule,
    DialogModule,
    BrowserAnimationsModule,
    PasswordModule,
    DropdownModule,
    InputNumberModule,
    CaptchaModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    TagModule,
    SelectButtonModule,
    ProgressBarModule,
    InputTextareaModule,
    ToggleButtonModule,
    ImageModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
