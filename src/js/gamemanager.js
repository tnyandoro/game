const GameManager = {
  // set three method inside the game manager method
  setGameStart(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },

  resetPlayer(classType) {
    switch (classType) {
      case 'Warrior':
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
        case 'Rouge':
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;

      default:
        break;
    }
  },

  setPreFight() {
  },
};