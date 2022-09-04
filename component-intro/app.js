const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'shakil',
          name: 'Shakil',
          phone: '01301756557',
          email: 'shakil1424@gmail.com',
        },
        {
          id: 'karim',
          name: 'Karim',
          phone: '01300100100',
          email: 'testmail@gmail.com',
        },
      ],
    };
  },
  methods: {},
});
app.component('friend-details', {
  template: `
  <li >
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">
            {{showDetails?'Hide Details':'Show Details'}}
          </button>
          <ul v-if="showDetails">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      showDetails: false,
      friend: {
        id: 'karim',
        name: 'Karim',
        phone: '01300100100',
        email: 'testmail@gmail.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});
app.mount('#app');
