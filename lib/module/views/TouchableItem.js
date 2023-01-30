function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * TouchableItem renders a touchable that looks native on both iOS and Android.
 *
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity.
 *
 * On iOS you can pass the props of TouchableOpacity, on Android pass the props
 * of TouchableNativeFeedback.
 */
import * as React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
const ANDROID_VERSION_LOLLIPOP = 21;
export default class TouchableItem extends React.Component {
  render() {
    /*
     * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
     * therefore only enable it on Android Lollipop and above.
     *
     * All touchables on Android should have the ripple effect according to
     * platform design guidelines.
     * We need to pass the background prop to specify a borderless ripple effect.
     */
    if (Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP) {
      const {
        style,
        ...rest
      } = this.props;
      return /*#__PURE__*/React.createElement(TouchableNativeFeedback, _extends({}, rest, {
        style: null,
        background: TouchableNativeFeedback.Ripple(this.props.pressColor, this.props.borderless)
      }), /*#__PURE__*/React.createElement(View, {
        style: style
      }, React.Children.only(this.props.children)));
    }
    return /*#__PURE__*/React.createElement(TouchableOpacity, this.props, this.props.children);
  }
}
_defineProperty(TouchableItem, "defaultProps", {
  borderless: false,
  pressColor: 'rgba(0, 0, 0, .32)'
});
//# sourceMappingURL=TouchableItem.js.map