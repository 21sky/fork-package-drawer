function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
/**
 * Component that renders the sidebar screen of the drawer.
 */
class DrawerSidebar extends React.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "getScreenOptions", routeKey => {
      const descriptor = this.props.descriptors[routeKey];
      if (!descriptor.options) {
        throw new Error('Cannot access screen descriptor options from drawer sidebar');
      }
      return descriptor.options;
    });
    _defineProperty(this, "getLabel", _ref => {
      let {
        focused,
        tintColor,
        route
      } = _ref;
      const {
        drawerLabel,
        title
      } = this.getScreenOptions(route.key);
      if (drawerLabel) {
        return typeof drawerLabel === 'function' ? drawerLabel({
          tintColor,
          focused
        }) : drawerLabel;
      }
      if (typeof title === 'string') {
        return title;
      }
      return route.routeName;
    });
    _defineProperty(this, "renderIcon", _ref2 => {
      let {
        focused,
        tintColor,
        route
      } = _ref2;
      const {
        drawerIcon
      } = this.getScreenOptions(route.key);
      if (drawerIcon) {
        return typeof drawerIcon === 'function' ? drawerIcon({
          tintColor,
          focused
        }) : drawerIcon;
      }
      return null;
    });
    _defineProperty(this, "handleItemPress", _ref3 => {
      let {
        route,
        focused
      } = _ref3;
      if (focused) {
        // @ts-ignore
        this.props.navigation.closeDrawer();
      } else {
        this.props.navigation.dispatch(NavigationActions.navigate({
          routeName: route.routeName
        }));
      }
    });
  }
  render() {
    const ContentComponent = this.props.contentComponent;
    if (!ContentComponent) {
      return null;
    }
    const {
      state
    } = this.props.navigation;
    if (typeof state.index !== 'number') {
      throw new Error('The index of the route should be state in the navigation state');
    }
    return /*#__PURE__*/React.createElement(View, {
      style: [styles.container, this.props.style]
    }, /*#__PURE__*/React.createElement(ContentComponent, _extends({}, this.props.contentOptions, {
      navigation: this.props.navigation,
      descriptors: this.props.descriptors,
      drawerOpenProgress: this.props.drawerOpenProgress,
      items: state.routes,
      activeItemKey: state.routes[state.index] ? state.routes[state.index].key : null,
      screenProps: this.props.screenProps,
      getLabel: this.getLabel,
      renderIcon: this.renderIcon,
      onItemPress: this.handleItemPress,
      drawerPosition: this.props.drawerPosition
    })));
  }
}
export default DrawerSidebar;
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=DrawerSidebar.js.map