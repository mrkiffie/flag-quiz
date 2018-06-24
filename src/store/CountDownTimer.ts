import { ITimer } from "./TimedGame";
import { computed, observable, action } from "mobx";

const MINUTE_IN_MILLISECONDS = 60 * 1000;
const FIFTEEN_MINUTES = 15 * MINUTE_IN_MILLISECONDS;

export class CountDownTimer implements ITimer {
  @observable private time: number;
  private lastTime: number;
  private intervalId: number = null;

  constructor(private DURATION: number = FIFTEEN_MINUTES) {
    this.time = this.DURATION;
  }

  @computed
  public get timer() {
    const minutes = Math.floor(this.time / MINUTE_IN_MILLISECONDS);
    const seconds = Math.round((this.time % MINUTE_IN_MILLISECONDS) / 1000);
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }
  @computed
  public get expired() {
    return this.time <= 0;
  }

  @action
  public restart =() => {
    this.stop();
    this.reset();
    requestAnimationFrame(this.start);
  }

  @action
  public start = () => {
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
    }
    this.lastTime = Date.now();
    this.intervalId = window.setInterval(this.tick, 1000);
  };
  @action
  public stop = () => {
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  @action
  private tick = () => {
    const current = Date.now();
    const delta = current - this.lastTime;
    this.lastTime = current;
    this.time -= delta;
    if (this.time < 0) {
      this.stop();
      this.time = 0;
    }
  };

  @action
  public reset = (time: number = this.DURATION) => {
    this.time = time;
  };
}
