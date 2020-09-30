<template>
  <div
    class="homeContainer"
    style="
      background-image: url(https://pixabay.com/photos/blurry-lights-night-dark-eventing-691240/);
    "
  >
    <div class="navContainer">
      <p>CLARA'S EVENTS</p>
      <div class="buttonContainer">
        <Button @click.native="$router.push('/Profile/')" title="MyProfile" />
      </div>
    </div>
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
import Button from "@/components/Button.vue";
import EventItem from "@/components/EventItem.vue";
import EventDetail from "@/components/EventDetail.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Button,
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
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.eventsContainer {
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
}

.buttonContainer {
  display: flex;
}
</style>
