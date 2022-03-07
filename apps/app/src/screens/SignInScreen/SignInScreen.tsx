import {ScreenFC, withScreen} from "../utils";
import {View, Text} from "react-native";

const SignInScreen: ScreenFC = () => {
  return (
    <View>
      <Text>SignInScreen</Text>
    </View>
  );
}

export default withScreen(SignInScreen, { route: 'SignInScreen' });
