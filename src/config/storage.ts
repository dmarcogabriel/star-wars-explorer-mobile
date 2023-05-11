import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async <IData>(
  key: string,
  data: IData,
): Promise<boolean> => {
  const dataString = typeof data === 'string' ? data : JSON.stringify(data);

  try {
    await AsyncStorage.setItem(key, dataString);
    return true;
  } catch (error) {
    return false;
  }
};

export const getStoredData = async <IData>(
  key: string,
): Promise<IData | string | null> => {
  const dataString = await AsyncStorage.getItem(key);

  if (!dataString) return null;

  try {
    return JSON.parse(dataString) as IData;
  } catch (error) {
    return dataString;
  }
};
