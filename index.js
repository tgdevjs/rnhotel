import { AppRegistry } from "react-native";

import App from "./src/index";
import { name as appName } from "./app.json";
import "./src/utils/yellow-box";

AppRegistry.registerComponent(appName, () => App);
