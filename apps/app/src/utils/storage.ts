import AsyncStorage from '@react-native-async-storage/async-storage';

export enum StorageKeys {
  hasBeenOnboarded = 'has-been-onboarded',
}

export async function getFromStorage<R = any>(key: StorageKeys, fallbackReturnValue?: null): Promise<R | null>;
export async function getFromStorage<R = any, FR = R>(key: StorageKeys, fallbackReturnValue?: FR): Promise<R | FR>;
export async function getFromStorage(key: StorageKeys, fallbackReturnValue: any = null) {
  const value = await AsyncStorage.getItem(key);

  return value ? JSON.parse(value) : fallbackReturnValue || null;
}

export async function getAllFromStorage() {
  const values = await AsyncStorage.getAllKeys();

  return values;
}

export const saveToStorage = async (key: StorageKeys, value: any) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export const removeFromStorage = async (key: StorageKeys) => {
  return AsyncStorage.removeItem(key);
}

export const removeMultipleFromStorage = async (keys: StorageKeys[]) => {
  await AsyncStorage.multiRemove(keys);
}

export default AsyncStorage;
