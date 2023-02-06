import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'submenu-list',
  templateUrl: './submenu-list.component.html'
})
export class SubmenuList {

  @Input() submenuList?: any;

  @ViewChild('submenuContainer', { read: ViewContainerRef }) 
  submenuContainer!: ViewContainerRef;

}
