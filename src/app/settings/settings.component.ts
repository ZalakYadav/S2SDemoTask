import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../models/megamenu.model';
import { MegaMenuService } from '../services/megamenu.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  // menuItems: MenuItem[] = [];
  // newMenuItem: MenuItem = { label: '' };

  // constructor(private menuService: MegaMenuService) {
  //   this.menuService.menuItems$.subscribe(items => {
  //     this.menuItems = items;
  //   });
  // }

  // addMenuItem() {
  //   if (this.newMenuItem.label) {
  //     this.menuItems.push({ ...this.newMenuItem });
  //     this.menuService.updateMenu(this.menuItems);
  //     this.newMenuItem = { label: '' };
  //   }
  // }

  @Input() menuItems: any[] = [];
  @Output() menuUpdated = new EventEmitter<any[]>();

  newItem = '';

  addMenuItem() {
    const newMenuItem = { key: this.newItem, content: this.newItem };
    this.menuItems.push(newMenuItem);
    this.menuUpdated.emit(this.menuItems);
    this.newItem = '';
  }
}
