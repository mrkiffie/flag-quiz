import { observable, action, toJS, reaction, computed } from "mobx";
import { get, set, Store } from "idb-keyval";

const SETTINGS_KEY = "settings";
const STORE_NAME = "flagquiz";
const STORAGE = new Store(STORE_NAME, STORE_NAME);

interface IPersistedSettings {
  isFastModeEnabled: boolean;
  isScoreEnabled: boolean;
  debug: boolean;
}

export class SettingsStore {
  constructor() {
    this.load();
    reaction(() => this.settings, () => this.save());
  }

  @observable public isScoreEnabled = false;
  @observable public isFastModeEnabled = false;
  @observable public debug = false;

  public toggleScore = () => {
    this.isScoreEnabled = !this.isScoreEnabled;
  };

  public toggleDebug = () => {
    this.debug = !this.debug;
  };

  public toggleFastMode = () => {
    this.isFastModeEnabled = !this.isFastModeEnabled;
  };

  @computed
  get settings() {
    return {
      isFastModeEnabled: this.isFastModeEnabled,
      isScoreEnabled: this.isScoreEnabled,
      debug: this.debug
    };
  }

  @action
  public load = async () => {
    const settings = await get<IPersistedSettings>(SETTINGS_KEY, STORAGE);
    if (settings) {
      this.isFastModeEnabled = settings.isFastModeEnabled;
      this.isScoreEnabled = settings.isScoreEnabled;
      this.debug = settings.debug;
    } else {
      this.save();
    }
  };

  public save = async () => {
    await set(SETTINGS_KEY, toJS(this.settings), STORAGE);
  };
}
