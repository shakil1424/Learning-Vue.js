<template>
  <li>
    <h2>{{ name }}{{ isFavorite ? '(Favourite)' : '' }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favourite</button>
    <button @click="deleteFriend">Delete</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  //props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: { String, required: true },
    phoneNumber: { String, required: true },
    emailAddress: { String, required: true },
    isFavorite: {
      Boolean,
      required: false,
      default: false,
    },
  },
  //emits: ['toggle-favorite'],
  emits: {
    'toggle-favorite': function (id) {
      if (id) {
        return true;
      } else {
        console.log('Id is missing');
        return false;
      }
    },
    delete: {},
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id);
    },
  },
};
</script>
<style></style>
