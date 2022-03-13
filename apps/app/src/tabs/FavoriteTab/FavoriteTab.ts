import { Tab } from "../types";
import FavoriteScreen from "../../screens/FavoriteScreen/FavoriteScreen";

const FavoriteTab: Tab = {
  name: 'FavoriteTab',
  getInitialRouteName: () => FavoriteScreen.route,
}

export default FavoriteTab;
