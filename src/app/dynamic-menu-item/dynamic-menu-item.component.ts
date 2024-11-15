import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-menu-item',
  templateUrl: './dynamic-menu-item.component.html',
  styleUrl: './dynamic-menu-item.component.scss'
})
export class DynamicMenuItemComponent {
  @Input() menu: any;
  @Input() selectedLevel!: number;
  @Input() newLevelName!: string;

 
}
