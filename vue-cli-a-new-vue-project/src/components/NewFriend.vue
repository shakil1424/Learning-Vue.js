<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="Name">Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="Phone">Phone</label>
      <input
        type="tel"
        v-model="enteredPhoneNumber"
        pattern="[0-9]{3}[0-9]{2}[0-9]{3}"
      />
    </div>
    <div>
      <label for="E-Mail">E-Mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhoneNumber: '',
      enteredEmail: '',
    };
  },
  methods: {
    submitData() {
      this.$emit(
        'add-contact',
        this.enteredName,
        this.enteredPhoneNumber,
        this.enteredEmail
      );
    },
  },
};
</script>
<style></style>
