import { NativeModules } from "react-native";

export default class FlagSecure {
  static activate() {
    NativeModules.FlagSecure.activate();
  }

  static deactivate() {
    NativeModules.FlagSecure.deactivate();
  }
}
