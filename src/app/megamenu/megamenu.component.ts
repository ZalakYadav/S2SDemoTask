import { Component } from '@angular/core';
import { MenuItem } from '../models/megamenu.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.scss']
})

export class MegamenuComponent {
  menuData: MenuItem[] = [];
  searchQuery: string = '';
  newLevelName: string = '';
  selectedParentLevel: string = '';
  filteredMenu: MenuItem[] = [];
  allMenuLevels: string[] = [];

  constructor(private snackBar: MatSnackBar) {
    this.loadMenuData();
    this.updateAllMenuLevels();
  }
  
  loadMenuData() {
    if (typeof window !== 'undefined') {
      const savedMenu = localStorage.getItem('menuData');
      if (savedMenu) {
        this.menuData = JSON.parse(savedMenu);
      } else {
        this.menuData = [
          {
            label: 'MenuItem-1',
            url: '/menu1',
            children: [
              {
                label: 'Submenu 1.1',
                url: '/menu1/sub1',
                children: [
                  {
                    label: 'Submenu 1.1.1',
                    url: '/menu1/sub1/subsub1',
                    children: [],
                  },
                  {
                    label: 'Submenu 1.1.2',
                    url: '/menu1/sub1/subsub2',
                    children: [],
                  },
                ],
              },
              {
                label: 'Submenu 1.2',
                url: '/menu1/sub2',
                children: [
                  {
                    label: 'Submenu 1.2.1',
                    url: '/menu1/sub2/subsub1',
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            label: 'MenuItem-2',
            url: '/menu2',
            children: [
              {
                label: 'Submenu 2.1',
                url: '/menu2/sub1',
                children: [
                  {
                    label: 'Submenu 2.1.1',
                    url: '/menu2/sub1/subsub1',
                    children: [],
                  },
                ],
              },
              {
                label: 'Submenu 2.2',
                url: '/menu2/sub2',
                children: [],
              },
            ],
          },
          {
            label: 'MenuItem-3',
            url: '/menu3',
            children: [
              {
                label: 'Submenu 3.1',
                url: '/menu3/sub1',
                children: [
                  {
                    label: 'Submenu 3.1.1',
                    url: '/menu3/sub1/subsub1',
                    children: [],
                  },
                ],
              },
              {
                label: 'Submenu 3.2',
                url: '/menu3/sub2',
                children: [],
              },
            ],
          },
          {
            label: 'MenuItem-4',
            url: '/menu4',
            children: [
              {
                label: 'Submenu 4.1',
                url: '/menu4/sub1',
                children: [
                  {
                    label: 'Submenu 4.1.1',
                    url: '/menu4/sub1/subsub1',
                    children: [],
                  },
                ],
              },
              {
                label: 'Submenu 4.2',
                url: '/menu4/sub2',
                children: [],
              },
            ],
          },
          {
            label: 'MenuItem-5',
            url: '/menu5',
            children: [
              {
                label: 'Submenu 5.1',
                url: '/menu5/sub1',
                children: [
                  {
                    label: 'Submenu 5.1.1',
                    url: '/menu5/sub1/subsub1',
                    children: [],
                  },
                ],
              },
              {
                label: 'Submenu 5.2',
                url: '/menu5/sub2',
                children: [],
              },
            ],
          },
        ];
        this.saveMenuData();
      }
      this.filteredMenu = [...this.menuData];
    } else {
      console.warn('localStorage is not available in this environment.');
    }
  }

  saveMenuData() {
    localStorage.setItem('menuData', JSON.stringify(this.menuData));
  }

  filterMenu() {
    this.filteredMenu = this.menuData.filter((menu) =>
      this.searchInMenu(menu, this.searchQuery)
    );
  }

  searchInMenu(menu: MenuItem, query: string): boolean {
    if (menu.label.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
    return menu.children.some((child) => this.searchInMenu(child, query));
  }

  updateAllMenuLevels() {
    this.allMenuLevels = [];
    this.collectMenuLevels(this.menuData);
  }

  collectMenuLevels(menu: MenuItem[], parentPath: string = '') {
    menu.forEach((item) => {
      const fullPath = parentPath ? `${parentPath} > ${item.label}` : item.label;
      this.allMenuLevels.push(fullPath);
      if (item.children) {
        this.collectMenuLevels(item.children, fullPath);
      }
    });
  }

  addNewLevel() {
    if (!this.newLevelName || !this.selectedParentLevel) return;

    this.snackBar.open(`New level "${this.newLevelName}" added under "${this.selectedParentLevel}".`, 'Close', {
      duration: 3000,
    });

    const parentPath = this.selectedParentLevel.split(' > ');
    let parent: MenuItem[] = this.menuData;

    for (const level of parentPath) {
      const foundItem = parent.find((item) => item.label === level);
      if (!foundItem) return;
      parent = foundItem.children;
    }

    parent.push({
      label: this.newLevelName,
      url: `/${this.newLevelName.toLowerCase().replace(/\s+/g, '-')}`,
      children: [],
      isOpen: false,
    });

    this.newLevelName = '';
    this.selectedParentLevel = '';
    this.updateAllMenuLevels();

    this.menuData = [...this.menuData];
    this.filteredMenu = [...this.menuData];
    console.log('filter data', this.filteredMenu)
    this.saveMenuData();
  }
}