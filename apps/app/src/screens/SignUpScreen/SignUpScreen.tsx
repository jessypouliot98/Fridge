import {ScreenFC, withScreen} from "../utils";
import {View, Text} from "react-native";

const SignUpScreen: ScreenFC = () => {
  return (
    <View>
      <Text>SignInScreen</Text>
    </View>
  );
}

export default withScreen(SignUpScreen, { route: 'SignUpScreen' });
