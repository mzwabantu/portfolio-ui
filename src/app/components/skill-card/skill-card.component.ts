import { Component, Input } from '@angular/core';
import { SkillInput } from './skill-card.interface';


@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  @Input() skills: SkillInput = {
    years: '5+ years',
    percent: '88%',
    title: "I'm a Figma ninja",
    icon: "assets/tech/figma.svg",
    barColor: "#A259FF",
    iconColor: "#1C172B"
  };
}
