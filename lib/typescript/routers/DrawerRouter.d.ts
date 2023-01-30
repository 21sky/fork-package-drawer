import { NavigationAction, NavigationRoute, NavigationRouteConfigMap } from 'react-navigation';
type State = NavigationRoute & {
    isDrawerOpen?: any;
};
declare const _default: (routeConfigs: NavigationRouteConfigMap<any, any>, config?: {
    unmountInactiveRoutes?: boolean;
    resetOnBlur?: boolean;
    initialRouteName?: string;
}) => {
    getActionCreators(route: NavigationRoute, navStateKey: string): {
        openDrawer: () => any;
        closeDrawer: () => any;
        toggleDrawer: () => any;
    };
    getStateForAction(action: NavigationAction, state?: State): any;
    getActionForPathAndParams: (path: string, params?: import("react-navigation").NavigationParams | undefined) => NavigationAction | null;
    getPathAndParamsForState: (state: any) => {
        path: string;
        params?: import("react-navigation").NavigationParams | undefined;
    };
    getComponentForRouteName: (routeName: string) => import("react-navigation").NavigationComponent<{}, import("react-navigation").NavigationScreenProp<NavigationRoute<import("react-navigation").NavigationParams>, import("react-navigation").NavigationParams>>;
    getComponentForState: (state: any) => import("react-navigation").NavigationComponent<{}, import("react-navigation").NavigationScreenProp<NavigationRoute<import("react-navigation").NavigationParams>, import("react-navigation").NavigationParams>>;
    getScreenOptions: import("react-navigation").NavigationScreenOptionsGetter<any>;
};
export default _default;
