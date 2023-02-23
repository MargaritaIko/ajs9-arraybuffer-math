import Character from './BaseClass';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attackPrivate = 10;
    this.defence = 40;
  }
}
