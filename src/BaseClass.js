export default class Character {
  constructor(name) {
    this.name = name;
    this.stoned = false;
    this.spoiledAttack = null;
  }

  get stoned() {
    return this.spoiledAttack;
  }

  set stoned(cell) {
    this.spoiledAttack = this.attackPrivate - 5 * Math.log2(cell);
    if (this.spoiledAttack < 0) {
      this.spoiledAttack = 0;
    }
  }

  get attack() {
    return this.spoiledAttack;
  }

  set attack(cell) {
    this.spoiledAttack = (1 - cell / 10) * this.attackPrivate;
    if (this.spoiledAttack < 0) {
      this.spoiledAttack = 0;
    }
  }
}
