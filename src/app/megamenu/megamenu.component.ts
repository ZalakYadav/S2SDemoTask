// import { Component, Input, OnInit } from '@angular/core';
// import { MegaMenuService } from '../services/megamenu.service';
// interface MenuItem {
//   label: string;
//   url?: string;
//   children?: MenuItem[];
//   isOpen?: boolean;
// }

// @Component({
//   selector: 'app-megamenu',
//   templateUrl: './megamenu.component.html',
//   styleUrl: './megamenu.component.scss'
// })

// export class MegamenuComponent {

//   @Input() items: any[] = [];

//   // showSubMenu(item: any): void {
//   //   debugger
//   //   item.show = true;
//   // }

//   // hideSubMenu(item: any): void {
//   //   item.show = false;
//   // }


//   showSubMenu(item: any): void {
//     debugger
//     item.show = true; // Dynamically toggle visibility
//   }

//   // Hide submenu
//   hideSubMenu(item: any): void {
//     debugger
//     item.show = false; // Revert visibility
//     // Optionally, recursively hide all child menus
//     if (item.menu) {
//       item.menu.forEach((subItem: any) => {
//         this.hideSubMenu(subItem);
//       });
//     }
//   }
// }

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.scss']
})
export class MegamenuComponent implements OnInit{

  menuData: any[] = []; // Menu data stored in localStorage
  filteredMenu: any[] = []; // Filtered menu for display
  allMenuLevels: string[] = []; // List of all level names for dropdown

  searchQuery: string = ''; // Search input
  newLevelName: string = ''; // Input for new level name
  selectedParentLevel: string = ''; 

  ngOnInit() {
    this.loadMenuData();
  }
  // menuData = [
  //   {
  //     key: 'FirstIconButton',
  //     icon: 'MenuIcon',
  //   },
  //   {
  //     key: 'MenuItem-1',
  //     content: 'MenuItem-1',
  //     on: 'hover',
  //     menu: {
  //       items: [
  //         {
  //           key: '1',
  //           on: 'hover',
  //           content: 'MenuItem-1.1',
  //         },
  //         {
  //           key: '2',
  //           on: 'hover',
  //           content: 'MenuItem-1.2',
  //           menu: [
  //             {
  //               key: '1',
  //               content: 'MenuItem-1.2.1',
  //               on: 'hover',
  //               menu: [
  //                 {
  //                   key: '1',
  //                   content: 'MenuItem-1.2.1.1',
  //                   on: 'hover',
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     key: 'LastIconButton',
  //     icon: 'MoreIcon',
  //   },
  // ];

  loadMenuData() {
    const savedMenu = localStorage.getItem('menuData');
    if (savedMenu) {
      this.menuData = JSON.parse(savedMenu);
    } else {
      this.menuData = [
        {
          key: 'MenuItem-1',
          content: 'MenuItem-1',
          menu: {
            items: [
              { key: '1', content: 'MenuItem-1.1' },
              {
                key: '2',
                content: 'MenuItem-1.2',
                menu: {
                  items: [{ key: '1', content: 'MenuItem-1.2.1' }]
                }
              }
            ]
          }
        }
      ];
      this.saveMenuData();
    }
    this.filteredMenu = [...this.menuData];
    this.collectAllMenuLevels(this.menuData);
  }

  // Save menuData to localStorage
  saveMenuData() {
    localStorage.setItem('menuData', JSON.stringify(this.menuData));
  }

  // Filter menu based on search input
  filterMenu() {
    if (!this.searchQuery) {
      this.filteredMenu = [...this.menuData];
      return;
    }
    this.filteredMenu = this.searchMenu(this.menuData, this.searchQuery);
  }

  // Recursive search in menu structure
  searchMenu(menuItems: any[], query: string): any[] {
    return menuItems
      .filter(item => item.content.toLowerCase().includes(query.toLowerCase()))
      .map(item => ({
        ...item,
        menu: item.menu ? { items: this.searchMenu(item.menu.items || [], query) } : null
      }))
      .filter(item => item.content || (item.menu && item.menu.items.length > 0));
  }

  // Add a new level to the selected parent level
  addNewLevel() {
    if (!this.newLevelName || !this.selectedParentLevel) {
      alert('Please enter a valid level name and select a parent level.');
      return;
    }
    this.addLevelToMenu(this.menuData, this.selectedParentLevel, this.newLevelName);
    this.saveMenuData();
    this.filteredMenu = [...this.menuData];
    this.newLevelName = '';
  }

  // Recursive function to add a new level to the menu
  addLevelToMenu(menuItems: any[], parentLevel: string, newLevelName: string) {
    for (let item of menuItems) {
      if (item.content === parentLevel) {
        if (!item.menu) {
          item.menu = { items: [] };
        }
        item.menu.items.push({ key: newLevelName, content: newLevelName });
        return;
      }
      if (item.menu && item.menu.items) {
        this.addLevelToMenu(item.menu.items, parentLevel, newLevelName);
      }
    }
  }

  // Collect all menu levels for dropdown
  collectAllMenuLevels(menuItems: any[]) {
    for (let item of menuItems) {
      this.allMenuLevels.push(item.content);
      if (item.menu && item.menu.items) {
        this.collectAllMenuLevels(item.menu.items);
      }
    }
  }
}

