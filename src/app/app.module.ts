import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillIconComponent } from './components/skill-icon/skill-icon.component';
import { WorkCardComponent } from './components/work-card/work-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ExperienceButtonComponent } from './components/experience-button/experience-button.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutCardComponent,
    SkillCardComponent,
    SkillIconComponent,
    WorkCardComponent,
    ProgressBarComponent,
    ExperienceButtonComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
