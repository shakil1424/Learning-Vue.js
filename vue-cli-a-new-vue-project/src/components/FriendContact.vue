<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.name }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'shakil',
        name: 'Shakil',
        phone: '01307156557',
        email: 'shakil1424@gmail.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
<style lang=""></style>
