import {ScreenFC, withScreen} from "../utils";
import {Text, View} from "react-native";
import {Permissions} from "../../utils/permissions";
import {useRootSelector} from "../../hooks";
import {selectIsLoggedIn} from "../../store/account/selectors";
import FavoriteTab from "../../tabs/FavoriteTab/FavoriteTab";
import React from 'react';

const FavoriteScreen: ScreenFC = (props) => {
  const isLoggedIn = useRootSelector(selectIsLoggedIn());

  return (
    <View>
      <Text>FavoriteScreen</Text>
    </View>
  )
}

export default withScreen(FavoriteScreen, {
  route: 'FavoriteScreen',
  permissions: [Permissions.PUBLIC],
  tab: FavoriteTab,
})
