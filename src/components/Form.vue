<template>
  <div class="contentContainer">
    <div class="formContainer">
      <form>
        <label for="fname">First name:</label><br />
        <input v-model="fName" type="text" id="fname" name="fname" /><br />
        <label for="lname">Last name:</label><br />
        <input v-model="lName" type="text" id="lname" name="lname" /><br />
        <label for="email">Email:</label><br />
        <input v-model="email" type="text" id="email" name="email" /><br />
        <div class="submitButton" v-on:click="submitButtonPressed()">
          <p>SUBMIT</p>
        </div>
        <!-- <div class="listOfEvents" v-bind="getListOfEvents()"></div> -->
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

    // getListOfEvents() {
    //     const submittedEvents = listOfEventsSignedUpFor

    // }

    ...mapActions(["signUpForEvent", "attendEvent"]),

    // ...mapGetters (["listOfEventsSignedUpFor"])
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
  background: lightgray;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.formContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 25em;
  width: 35em;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
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
</style>