const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course',
      //courseGoalB: '<h2>Mastrer the course</h2>',
      courseGoalB: 'Mastrer the course',
      vueLink: 'https://vuejs.org/',
      //We will set this as value for  style attribute
      styleSet: { color: 'red', 'text-decoration': 'none ' },
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount('#user-goal');
