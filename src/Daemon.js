import Character from './BaseClass';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attackPrivate = 10;
    this.defence = 40;
  }
}
