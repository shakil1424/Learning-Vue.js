const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullName: '',
    };
  },
  watch: {
    /* name(value) {
      if (value === '') {
        this.fullName = '';
      } else {
        this.fullName = value + ' ' + 'Uddin';
      }
    }, */
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }

      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    outputFullName() {
      return this.name === '' ? '' : this.name + ' ' + 'Uddin';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
