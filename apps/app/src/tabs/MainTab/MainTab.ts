import { Tab } from "../types";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";

const MainTab: Tab = {
  name: 'MainTab',
  getInitialRouteName: () => HomeScreen.route,
}

export default MainTab;
