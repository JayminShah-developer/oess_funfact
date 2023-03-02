import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FresherComponent } from './fresher/fresher.component';
import { QuestionComponent } from './question/question.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UploadsModule } from "@progress/kendo-angular-upload";
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FresherComponent,
    QuestionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LabelModule,
    ButtonsModule,
    IconsModule,
    HttpClientModule,
    UploadsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
