import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
import AsyncStorage from "@react-native-async-storage/async-storage";

RNAsyncStorageFlipper(AsyncStorage);

AppRegistry.registerComponent(appName, () => App);
