

export interface MenuStructure {
    menuData: MenuLeaf[];
}

export interface SubMenu extends MenuLeaf {
    heading: string;
    menuItems: MenuLeaf[];
}

export interface MenuItem extends MenuLeaf {
    display: string;
    link: string | string[];
}

export interface MenuLeaf {
    type: string;
}
