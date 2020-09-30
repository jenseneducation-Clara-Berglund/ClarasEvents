<template>
  <div
    class="homeContainer"
    style="
      background-image: url(https://pixabay.com/photos/blurry-lights-night-dark-eventing-691240/);
    "
  >
    <router-link to="/Profile">Profile</router-link>

    <div class="navContainer">
      <p>CLARA'S EVENTS</p>
    </div>
    <h2>Events to choose from</h2>
    <div class="eventsContainer">
      <EventItem
        class="eventItem"
        v-for="e in listOfEvents"
        v-bind:event="e"
        :key="e.id"
        @clicked="showEventModal(e)"
      />
      <EventDetail
        v-bind:event="this.event"
        v-if="showModal"
        @close="closeEventModal"
        @join-event="joinEvent()"
      />
    </div>
  </div>
</template>

<script>
import EventItem from "@/components/EventItem.vue";
import EventDetail from "@/components/EventDetail.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    EventItem,
    EventDetail,
  },

  computed: {
    ...mapGetters(["listOfEvents"]),
  },

  methods: {
    profileButtonClicked() {},

    joinEvent() {
      this.$router.push("/JoinEvent/" + this.event.id);
    },

    closeEventModal() {
      this.showModal = false;
    },
    showEventModal(e) {
      this.event = e;
      this.showModal = true;
    },
  },

  data() {
    return {
      showModal: false,
      event: null,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 4em;
}
.homeContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.navContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.eventsContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
}

.buttonContainer {
  display: flex;
}
</style>
