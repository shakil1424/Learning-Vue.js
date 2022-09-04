const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
      i: 1,
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
    checkEnter(event) {
      if (event.key == 'Enter') {
        this.setText();
        this.$refs.userText.value = '';
      }
    },
  },
  beforeCreate() {
    console.log('Before created');
  },
  created() {
    console.log('After created');
  },
  beforeMount() {
    console.log('Before mounting');
  },
  mounted() {
    console.log('After mounted');
  },
  beforeUpdate() {
    console.log('Before update');
  },
  updated() {
    console.log('Updated');
  },
  beforeUnmount() {
    console.log('Before unmount');
  },
  unmounted() {
    console.log('Unmounted');
  },
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 3000);
