import { Component, Input } from '@angular/core';
import { SkillInput } from '../skill-card/skill-card.interface';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {
  @Input() skillType : 'fe' | 'ui' | string = 'ui';
  @Input() title: string = '...';
  @Input() descr: string = '...';

  skills = {
    xd:{
      title: "Adobe XD super hero",
      years: '8+ years',
      percent: '88%',
      icon: "assets/tech/xd.svg",
      barColor: "#FF61F6",
      iconColor: "#470137"
    },
    js:{
      title: "Javascript Jedi am I",
      years: '7+ years',
      percent: '83%',
      icon: "assets/tech/js.svg",
      barColor: "#F0DB4F",
      iconColor: "#F0DB4F"
    },
    css:{
      title: "A CSS3 legend",
      years: '10+ years',
      percent: '95%',
      icon: "assets/tech/css.svg",
      barColor: "#214CE5",
      iconColor: "#214CE5"
    },
  }


}
