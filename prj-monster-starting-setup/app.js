function getAttackValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterHealthBarStyles() {
      return { width: this.monsterHealth + '%' };
    },
    playerHealthBarStyles() {
      return { width: this.playerHealth + '%' };
    },
    specialAttackDisabled() {
      return this.currentRound === 0 || this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getAttackValue(5, 10);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getAttackValue(7, 12);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getAttackValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
  },
});
app.mount('#game');
