import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-icon',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.scss']
})
export class SkillIconComponent {
  @Input() icon: string = 'assets/tech/figma.svg';
}
