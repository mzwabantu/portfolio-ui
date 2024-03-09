import { Component, Input } from '@angular/core';
import { ExpInterface } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-experience-button',
  templateUrl: './experience-button.component.html',
  styleUrls: ['./experience-button.component.scss']
})
export class ExperienceButtonComponent {
  @Input() data!: ExpInterface;
}
