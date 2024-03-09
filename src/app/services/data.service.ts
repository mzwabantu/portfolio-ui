import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExpInterface } from '../interfaces/experience.interface';
import { ProjectInterface } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }



  getExperience(): Observable<ExpInterface[]> {
    return of([
      {
        position: "Front-End Developer",
        startYear: "2022",
        endYear: "Now",
        company: "Accenture",
        logo: "assets/exp/acn.svg",
        description: "Frontend: JS (ES6+), React, Angular, UX, testing, collaboration, prototypes, performance optimization.",
        stack: ["ES6+", "React", "Angular", "NestJS", "Typescript", "Redux", "Sass", "Figma"],
        url: "https://www.accenture.com/za-en",
      },
      {
        position: "UI/UX Developer",
        startYear: "2018",
        endYear: "2022",
        company: "Perfect Circle",
        logo: "assets/exp/pc.svg",
        description: "Led UI/UX design, frontend dev with React, Angular, Ionic. Coordinated teams, executed research.",
        stack: [ "Angular", "Ionic", "React", "Javascript", "Bootstrap", "Wordpress", "Adobe XD"],
        url: "https://www.perfectcircle.co.za/",
      },
      {
        position: "Web Designer/Developer",
        startYear: "02.18",
        endYear: "08.18",
        company: "Jumbo Clothing",
        logo: "assets/exp/jumbo.svg",
        description: "Designs & product photos for Jumbo Stores' online presence in SA, enhancing marketing campaigns & website aesthetics.",
        stack: ["Photoshop", "HTML", "CSS", "Javscript", "Wordpress"],
        url: "https://www.jumboclothing.co.za/",
      },
      {
        position: "Graphic Designer",
        startYear: "2016",
        endYear: "2018",
        company: "Green Dot Media",
        logo: "assets/exp/greendot.svg",
        description: "Daily management of diverse design tasks, from immediate client branding needs to extensive projects with corporations.",
        stack: ["Corel Draw", "Illustrator", "Photoshop", "InDesign"],
        url: "https://greendotmedia.co.za/",
      }
    ])
  }

  getBio(): Observable<any> {
    return of([
      
    ])
  }

  getProjects(): Observable<ProjectInterface[]> {
    return of([
      {
        title: "MTN Superflex",
        description: "MTN's newest offering SuperFlex is here to help users tailor their data needs to their budget.",
        stack: ["assets/stack/ts.svg", "assets/stack/nest.svg", "assets/stack/angular17.svg", "assets/stack/bootstrap.svg", "assets/stack/sass.svg"],
        url: "https://www.mtn.co.za/superflex/data",
        image: "assets/projects/mtn.jpg"
      },
      {
        title: "Amobia",
        description: "View Amobia network status, access help desk for support, and control your connectivity seamlessly from your device.",
        stack: ["assets/stack/javascript.svg", "assets/stack/capacitor.svg", "assets/stack/ruby.svg", "assets/stack/angular.svg", "assets/stack/bootstrap.svg"],
        url: "https://apps.apple.com/za/app/amobia-communications/id1487091498",
        image: "assets/projects/amobia.jpg"
      },
      {
        title: "Nexudoc",
        description: "Nexudoc empowers service members to manage military medical records, enabling injury record, health monitoring, and secure benefits sharing.",
        stack: ["assets/stack/javascript.svg", "assets/stack/capacitor.svg", "assets/stack/ruby.svg", "assets/stack/angular.svg", "assets/stack/bootstrap.svg"],
        url: "https://apps.apple.com/us/app/nexudoc/id1641358904",
        image: "assets/projects/nexudoc.jpg"
      }
    ])
  }
}
