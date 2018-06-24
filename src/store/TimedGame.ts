import { computed, action, reaction, observable } from "mobx";

export interface ITimer {
  restart: () => void;
  start: () => void;
  reset: (duration?: number) => void;
  stop: () => void;
  timer: string;
  expired: boolean;
}

export interface IGame {
  setAnswer: (guess: string) => void;
  completed: number;
  total: number;
  reset: () => void;
}

export interface ITimedGame<G, T> {
  countDownTimer: T;
  game: G;
  start: () => void;
  timer: string;
  started: boolean;
  win: boolean;
  lose: boolean;
}

export class TimedGame<G extends IGame, T extends ITimer>
  implements ITimedGame<G, T> {

  @observable public started = false;

  constructor(public game: G, public countDownTimer: T) {
    reaction(() => this.win || this.lose, () => this.stop());

  }

  @computed get win() {
    return this.game.completed === this.game.total && !this.countDownTimer.expired;
  }
  @computed get lose() {
    return this.game.completed < this.game.total && this.countDownTimer.expired;
  }

  @action
  public start = () => {
      this.countDownTimer.restart();
      this.game.reset();
      this.started = true;
  };

  @action
  private stop = () => {
    this.countDownTimer.stop();
  }

  @computed
  public get timer() {
    return this.countDownTimer.timer;
  }
}
