import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error saving data', e);
  }
};

export const loadData = async (key: string) => {
  try {
    const json = await AsyncStorage.getItem(key);
    return json != null ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Error loading data', e);
    return [];
  }
};
