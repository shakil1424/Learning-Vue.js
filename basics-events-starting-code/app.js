const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmed_name: '',
    };
  },
  methods: {
    submitForm() {
      alert('Form tried to be submitted');
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    confirmName() {
      this.confirmed_name = this.name;
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount('#events');
