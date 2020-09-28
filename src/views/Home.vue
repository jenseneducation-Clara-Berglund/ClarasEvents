<template>
  <div class="homeContainer">
    <div class="navContainer">
      <p>CLARAS EVENTS</p>
      <div class="buttonContainer">
        <Button @click.native="$router.push('/Profile/')" title="MyProfile" />
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
        />
      </div>
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

<style>
.navContainer {
  display: flex;
  flex-direction: row;
}

.eventsContainer {
  display: flex;

  justify-content: center;
  align-items: center;
}
</style>
