import { YellowBox } from "react-native";

// @todo remove this after React upgrades to next major version
// https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
// https://github.com/facebook/react-native/issues/18175
YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated"
]);
