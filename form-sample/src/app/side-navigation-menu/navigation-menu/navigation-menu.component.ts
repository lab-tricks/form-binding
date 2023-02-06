import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {  MenuStructure, SubMenu, MenuItem } from '../menu-structure.interfaces';
import { SubmenuList } from '../submenu-list/submenu-list.component';


  const navMenu: MenuStructure = {
    menuData: [
      { type: 'submenu', 
        heading: 'Main', 
        menuItems: [
          { type: 'link-item', display: 'First Item', link: ['/sample-form'] } as MenuItem
        ] 
      } as SubMenu,
      { type: 'link-item', display: 'Link', link: 'https://localhost:15443'} as MenuItem
    ]
  };

  const jsonMenu: any = {
    menuData: [
      { type: 'submenu', 
        heading: 'Main', 
        menuItems: [
          { type: 'link-item', display: 'First Item', link: ['/sample-form'] }
        ] 
      },
      { type: 'link-item', display: 'Link', link: 'https://localhost:15443'}
    ]
  };


  @Component({
    selector: 'navigation-menu',
    templateUrl: './navigation-menu.component.html'
  })
export class NavigationMenu implements OnInit {

  @ViewChild('menuContainer', { read: ViewContainerRef }) 
  menuContainer!: ViewContainerRef;

  ngOnInit(): void {
    
    const submenuTs = this.menuContainer.createComponent(SubmenuList);
    submenuTs.setInput('submenuList', navMenu.menuData[0]);

    const submenuJs = this.menuContainer.createComponent(SubmenuList);
    submenuTs.setInput('submenuList', jsonMenu.menuData[0]);

  }


  

}
