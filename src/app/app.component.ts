import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { gsap, } from "gsap";
import { Observer} from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DataService } from './services/data.service';
import { ExpInterface } from './interfaces/experience.interface';
import { ProjectInterface } from './interfaces/project.interface';
import { Subscription } from 'rxjs';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer); 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  exp: ExpInterface[] = [];
  projects: ProjectInterface[] = [];

  expSub$: Subscription = Subscription.EMPTY;
  projectSub$: Subscription = Subscription.EMPTY;

  showNavigationArrows = false;
	showNavigationIndicators = true;
  
	skills = [
    {
      type: 'ui', 
      title: "UI/UX Ninja",
      description: "Passionate about crafting user-centric digital experiences, I've dedicated years to perfecting intuitive UI/UX designs for impactful solutions."
    }, 
    {
      type: 'fe', 
      title: "Front-End Picasso",
      description: "I weave digital masterpieces with lines of code and strokes of design finesse, transforming screens into playgrounds where creativity dances with functionality."
    }
  ];
  
  constructor(
    private dataService: DataService,
    config: NgbCarouselConfig,
  ) {
    config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
  }

  ngAfterViewInit(): void {
    this.setupGsap();
  }
  
  onSlide(e:any) {
    console.log(e)
  }

  ngOnInit(): void {
      this.expSub$ = this.dataService.getExperience()
        .subscribe( res => {
          res.forEach(el => el.isActive = false)
          res[0].isActive = true;
          this.exp = res;
        });

      this.projectSub$ = this.dataService.getProjects()
        .subscribe( res => this.projects = res);
  }

  onExperienceClick(elem: ExpInterface) {
    let index = this.exp.indexOf(elem);
    this.exp.forEach(x => x.isActive = false);
    this.exp[index].isActive = true;
  }

  ngOnDestroy(): void {
      this.expSub$.unsubscribe();
      this.projectSub$.unsubscribe();
  }

  setupGsap(): void {
    const fadeInItems = [
      '.banner .fadeIn', '.about', '.exp-heading .fadeIn', 
      '.timeline .fadeIn', '.fadeIn.glow', '.project-heading .fadeIn', 
      '.project-item .fadeIn', '.contact .fadeIn' 
    ];
    fadeInItems.forEach((item, i) => {
      const anim = gsap.fromTo(item, {autoAlpha: 0, y: 50,}, {duration: 1, autoAlpha: 1, y: 0, stagger: 0.255, delay: 0.0255});
      ScrollTrigger.create({
        trigger: item,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });
    });


    const cpNumbers = [2,3,4,5];
    const random = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1) + min);
    cpNumbers.forEach(el => {
      gsap.to(`.cp-${el}`, {
        translateY: random(50, 500),
        scale: random(0.6, 2),
        autoAlpha: 0.655,
        duration: 1,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: `.cp-${el}`,
          scrub: 1
        }, 
      });
    });

  }
}


