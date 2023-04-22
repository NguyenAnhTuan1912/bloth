import AsyncStorage from "@react-native-async-storage/async-storage";

const HAS_FIRST_LAUNCH_KEY = 'hasFirstLaunch';
const ID_TOKEN_KEY = 'idToken';
const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

/**
 * Đây là một hàm bất đồng bộ dùng để check xem là người dùng này có phải lần đầu vào ứng dụng hay không?
 * @param {string} userId 
 */
async function hasFirstLaunch(userId) {
  try {
    let hasFirstLaunchKey = userId
    ? HAS_FIRST_LAUNCH_KEY + "_" + userId
    : HAS_FIRST_LAUNCH_KEY;

    let result = await AsyncStorage.getItem(hasFirstLaunchKey);

    if(!result) {
      await AsyncStorage.setItem(hasFirstLaunchKey, JSON.stringify(false));
      return true;
    }

    return result;
  } catch(error) {
    console.error(error.message);
  }
}

/**
 * Hàm bất đồng bộ này dùng để set `value` cho một `key` nào đó.
 * @param {string} key 
 * @param {string} value 
 * @returns 
 */
async function setValue(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

async function remove(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Hàm bất đồng bộ này dùng để lấy ra một `value` của `key` nào đó.
 * @param {string} key 
 * @returns 
 */
async function getValue(key) {
  try {
    let value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    return undefined;
  }
}

const AsyncStorageUltility = {
  hasFirstLaunch,
  getValue,
  setValue,
  remove,
  HAS_FIRST_LAUNCH_KEY,
  ID_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY
}

export default AsyncStorageUltility;