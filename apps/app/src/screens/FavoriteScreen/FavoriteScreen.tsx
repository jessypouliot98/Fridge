import {ScreenFC, withScreen} from "../utils";
import {View} from "react-native";
import {FavoriteTab} from "../../tabs";
import {Permissions} from "../../utils/permissions";
import {useRootSelector} from "../../hooks";
import {selectIsLoggedIn} from "../../store/account/selectors";
import {useEffect} from "react";
import SettingScreen from "../SettingScreen/SettingScreen";

const FavoriteScreen: ScreenFC = (props) => {
  const isLoggedIn = useRootSelector(selectIsLoggedIn());

  useEffect(() => {
    if (!isLoggedIn) {
      SettingScreen.navigate();
    }
  }, [isLoggedIn]);

  return (
    <View>

    </View>
  )
}

export default withScreen(FavoriteScreen, {
  route: 'FavoriteScreen',
  permissions: [Permissions.PUBLIC],
  tab: FavoriteTab,
})
