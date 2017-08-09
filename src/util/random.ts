export class Random {
  static getRandomRange<T>(array: T[], count: number) {
    return this.shuffleArray(array).slice(0, count);
  }

  static shuffleArray<T>(originalArray: T[]) {
    const array = originalArray.slice();
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = this.getRandomInt(i + 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  static getRandomItem<T>(array: T[]) {
    return array[this.getRandomIntegerBetween(0, array.length - 1)];
  }

  static getRandomInt(num: number) {
    return Math.floor(Math.random() * num);
  }

  static getRandomIntegerBetween(min: number, max: number) {
    return this.getRandomInt(max - min) + min;
  }
}
