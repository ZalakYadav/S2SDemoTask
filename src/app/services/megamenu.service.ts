// import { Injectable, OnInit } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { MenuItem } from '../models/megamenu.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class MegaMenuService {
//   // Initialize the menu items BehaviorSubject with some default data


//   private menuItemsSubject = new BehaviorSubject<MenuItem[]>([
//     {
//       label: 'MenuItem1',
//       children: [
//         {
//           label: 'SubMenuItem1',
//           children: [
//             {
//               label: 'My Career and Benefits',
//               children: [
//                 { label: 'HRweb', url: '/hrweb' },
//                 { label: 'Benefits', url: '/benefits' },
//                 { label: 'Learning Portal', url: '/learning-portal' },
//                 { label: 'Internal Jobs', url: '/internal-jobs' },
//                 { label: 'Company Store', url: '/company-store' },
//                 { label: 'Give', url: '/give' }
//               ]
//             },
//             {
//               label: 'Travel and Expense',
//               children: [
//                 { label: 'Travel', url: '/travel' },
//                 { label: 'Expenses', url: '/expenses' },
//                 { label: 'Payments', url: '/payments' },
//                 { label: 'US Immigration Travel', url: '/us-immigration-travel' }
//               ]
//             }
//           ]
//         },
//         {
//           label: 'SubMenuItem2',
//           children: [
//             {
//               label: 'Another Category',
//               children: [
//                 { label: 'Option 1', url: '/option1' },
//                 { label: 'Option 2', url: '/option2' }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ]);

//   // Expose menuItems as an observable
//   menuItems$ = this.menuItemsSubject.asObservable();

//   // Method to update menu items
//   updateMenu(items: MenuItem[]) {
//     this.menuItemsSubject.next(items);
//     if (this.isBrowser() && localStorage) {
//       localStorage.setItem('menuItems', JSON.stringify(items));
//     }
//   }

//   // Method to load menu items from localStorage (optional)
//   loadMenu(): MenuItem[] {
//     if (this.isBrowser() && localStorage) {
//       const storedMenu = localStorage.getItem('menuItems');
//       return storedMenu ? JSON.parse(storedMenu) : this.menuItemsSubject.value;
//     }
//     // Return default menu items if localStorage is not available
//     return this.menuItemsSubject.value;
//   }

//   // Utility method to check if we are in a browser environment
//   private isBrowser(): boolean {
//     return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
//   }

//   constructor() {
//     // Load menu items from localStorage on service initialization
//     const initialMenu = this.loadMenu();
//     this.menuItemsSubject.next(initialMenu);
//   }
// }

  