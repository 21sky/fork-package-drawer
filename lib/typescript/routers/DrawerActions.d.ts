export declare const OPEN_DRAWER = "Navigation/OPEN_DRAWER";
export declare const CLOSE_DRAWER = "Navigation/CLOSE_DRAWER";
export declare const TOGGLE_DRAWER = "Navigation/TOGGLE_DRAWER";
export declare const DRAWER_OPENED = "Navigation/DRAWER_OPENED";
export declare const DRAWER_CLOSED = "Navigation/DRAWER_CLOSED";
export declare const MARK_DRAWER_ACTIVE = "Navigation/MARK_DRAWER_ACTIVE";
export declare const MARK_DRAWER_SETTLING = "Navigation/MARK_DRAWER_SETTLING";
export declare const MARK_DRAWER_IDLE = "Navigation/MARK_DRAWER_IDLE";
export type DrawerActionType = typeof OPEN_DRAWER | typeof CLOSE_DRAWER | typeof TOGGLE_DRAWER;
export declare const openDrawer: (payload?: any) => any;
export declare const closeDrawer: (payload?: any) => any;
export declare const toggleDrawer: (payload?: any) => any;