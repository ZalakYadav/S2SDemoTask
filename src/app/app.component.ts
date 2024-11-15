import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'S2S_DemoTask';
  items: any[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        key: 'MenuItem-1',
        content: 'MenuItem-1',
        menu: [
          {
            key: '1',
            content: 'MenuItem-1.1',
            menu: [
              { key: '1', content: 'MenuItem-1.1.1' },
              { key: '2', content: 'MenuItem-1.1.2' },
            ],
          },
          {
            key: '2',
            content: 'MenuItem-1.2',
            menu: [
              { key: '1', content: 'MenuItem-1.2.1' },
              { key: '2', content: 'MenuItem-1.2.2' },
            ],
          },
        ],
      },
    ];

  }
  updateItems(updatedItems: any) {
    this.items = updatedItems;
    localStorage.setItem('itemsData', JSON.stringify(updatedItems));
  }
}

