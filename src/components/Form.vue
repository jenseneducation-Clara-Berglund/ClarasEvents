<template>
  <div class="formContainer">
    <form>
      <label for="fname">First name:</label><br />
      <input v-model="fName" type="text" id="fname" name="fname" /><br />
      <label for="lname">Last name:</label><br />
      <input v-model="lName" type="text" id="lname" name="lname" />
      <label for="email">Email:</label><br />
      <input v-model="email" type="text" id="email" name="email" /><br />
      <div class="submitButton" v-on:click="submitButtonPressed()">SUBMIT</div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    submitButtonPressed() {
      const eventId = parseInt(this.$route.params.id);
      this.signUpForEvent({
        eventId: eventId,
        fName: this.fName,
        lName: this.lName,
        email: this.email,
      });
      this.$router.push("/Profile");
    },

    ...mapActions(["signUpForEvent"]),
  },

  data() {
    return {
      fName: "",
      lName: "",
      email: "",
    };
  },
};
</script>

<style>
</style>