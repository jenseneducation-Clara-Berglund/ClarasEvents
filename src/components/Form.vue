<template>
  <div class="contentContainer">
    <div class="formContainer">
      <h1>Ange dina uppgifter för att delta!</h1>

      <form>
        <label for="fname">First name:</label><br />
        <input v-model="fName" type="text" id="fname" name="fname" /><br />
        <label for="lname">Last name:</label><br />
        <input v-model="lName" type="text" id="lname" name="lname" /><br />
        <label for="email">Email:</label><br />
        <input v-model="email" type="text" id="email" name="email" /><br />
        <div
          v-if="fName.length > 0 && lName.length > 0 && email.length > 0"
          class="submitButton"
          v-on:click="submitButtonPressed()"
        >
          <p>SUBMIT</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
      this.attendEvent({ eventId });

      this.$router.push("/Profile");
    },
    ...mapActions(["signUpForEvent", "attendEvent"]),
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

<style scoped>
.contentContainer {
  /* background: white; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.formContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: left;
}

.submitButton {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(55, 160, 116);
  border-radius: 0.5em;
  height: 2em;
  width: 6em;
  margin-top: 2em;
}
label {
  font-size: 2em;
}
input {
  font-size: 2em;
}
</style>