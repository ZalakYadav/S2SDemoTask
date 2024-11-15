export interface MenuItem {
    label: string;
    url?: string; 
    children?: MenuItem[]; 
    isOpen?: boolean;
  }

  