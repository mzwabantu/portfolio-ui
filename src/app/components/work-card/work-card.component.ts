import { Component, Input } from '@angular/core';
import { ExpInterface } from 'src/app/interfaces/experience.interface';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent {
  @Input() data!: ExpInterface;
}
