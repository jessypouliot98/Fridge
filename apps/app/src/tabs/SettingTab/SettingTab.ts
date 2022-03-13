import { Tab } from "../types";
import SettingScreen from "../../screens/SettingScreen/SettingScreen";

const SettingTab: Tab = {
  name: 'SettingTab',
  getInitialRouteName: () => SettingScreen.route,
}

export default SettingTab;
