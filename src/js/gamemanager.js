/* eslint-disable default-case */
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
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case 'Mage':
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case 'Hunter':
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
  },

  setPreFight() {
  },
};