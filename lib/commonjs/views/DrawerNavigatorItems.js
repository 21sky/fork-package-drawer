"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNavigation = require("react-navigation");
var _TouchableItem = _interopRequireDefault(require("./TouchableItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Component that renders the navigation list in the drawer.
 */
class DrawerNavigatorItems extends React.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "context", void 0);
  }
  getActiveTintColor() {
    let {
      activeTintColor
    } = this.props;
    if (!activeTintColor) {
      return;
    } else if (typeof activeTintColor === 'string') {
      return activeTintColor;
    }
    return activeTintColor[this.context];
  }
  getInactiveTintColor() {
    let {
      inactiveTintColor
    } = this.props;
    if (!inactiveTintColor) {
      return;
    } else if (typeof inactiveTintColor === 'string') {
      return inactiveTintColor;
    }
    return inactiveTintColor[this.context];
  }
  getActiveBackgroundColor() {
    let {
      activeBackgroundColor
    } = this.props;
    if (!activeBackgroundColor) {
      return;
    } else if (typeof activeBackgroundColor === 'string') {
      return activeBackgroundColor;
    }
    return activeBackgroundColor[this.context];
  }
  getInactiveBackgroundColor() {
    let {
      inactiveBackgroundColor
    } = this.props;
    if (!inactiveBackgroundColor) {
      return;
    } else if (typeof inactiveBackgroundColor === 'string') {
      return inactiveBackgroundColor;
    }
    return inactiveBackgroundColor[this.context];
  }
  render() {
    const {
      items,
      activeItemKey,
      getLabel,
      renderIcon,
      onItemPress,
      itemsContainerStyle,
      itemStyle,
      labelStyle,
      activeLabelStyle,
      inactiveLabelStyle,
      iconContainerStyle,
      drawerPosition
    } = this.props;
    const activeTintColor = this.getActiveTintColor();
    const activeBackgroundColor = this.getActiveBackgroundColor();
    const inactiveTintColor = this.getInactiveTintColor();
    const inactiveBackgroundColor = this.getInactiveBackgroundColor();
    return /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.container, itemsContainerStyle]
    }, items.map((route, index) => {
      const focused = activeItemKey === route.key;
      const color = focused ? activeTintColor : inactiveTintColor;
      const backgroundColor = focused ? activeBackgroundColor : inactiveBackgroundColor;
      const scene = {
        route,
        index,
        focused,
        tintColor: color
      };
      const icon = renderIcon(scene);
      const label = getLabel(scene);
      const accessibilityLabel = typeof label === 'string' ? label : undefined;
      const extraLabelStyle = focused ? activeLabelStyle : inactiveLabelStyle;
      return /*#__PURE__*/React.createElement(_TouchableItem.default, {
        key: route.key,
        accessible: true,
        accessibilityLabel: accessibilityLabel,
        onPress: () => {
          onItemPress({
            route,
            focused
          });
        },
        delayPressIn: 0
      }, /*#__PURE__*/React.createElement(_reactNavigation.SafeAreaView, {
        style: [{
          backgroundColor
        }, styles.item, itemStyle],
        forceInset: {
          [drawerPosition]: 'always',
          [drawerPosition === 'left' ? 'right' : 'left']: 'never',
          vertical: 'never'
        }
      }, icon ? /*#__PURE__*/React.createElement(_reactNative.View, {
        style: [styles.icon, focused ? null : styles.inactiveIcon, iconContainerStyle]
      }, icon) : null, typeof label === 'string' ? /*#__PURE__*/React.createElement(_reactNative.Text, {
        style: [styles.label, {
          color
        }, labelStyle, extraLabelStyle]
      }, label) : label));
    }));
  }
}
exports.default = DrawerNavigatorItems;
_defineProperty(DrawerNavigatorItems, "defaultProps", {
  activeTintColor: {
    light: '#2196f3',
    dark: '#fff'
  },
  activeBackgroundColor: {
    light: 'rgba(0, 0, 0, .04)',
    dark: 'rgba(255, 255, 255, .04)'
  },
  inactiveTintColor: {
    light: 'rgba(0, 0, 0, .87)',
    dark: 'rgba(255, 255, 255, .87)'
  },
  inactiveBackgroundColor: {
    light: 'transparent',
    dark: 'transparent'
  }
});
_defineProperty(DrawerNavigatorItems, "contextType", _reactNavigation.ThemeContext);
const styles = _reactNative.StyleSheet.create({
  container: {
    paddingVertical: 4
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center'
  },
  inactiveIcon: {
    /*
     * Icons have 0.54 opacity according to guidelines
     * 100/87 * 54 ~= 62
     */
    opacity: 0.62
  },
  label: {
    margin: 16,
    fontWeight: 'bold'
  }
});
//# sourceMappingURL=DrawerNavigatorItems.js.map