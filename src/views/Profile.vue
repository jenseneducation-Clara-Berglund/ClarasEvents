<template>
  <div class="profileContainer">
    <router-link to="/">Home</router-link>
    <div class="profileContentContainer">
      <h2>My attended events</h2>
      <div class="myAttendedEvents">
        <EventItem
          class="eventItem"
          v-for="e in listOfAttendedEvents"
          v-bind:event="e"
          :key="e.id"
          :showReviewButton="true"
          @review-button-clicked="reviewButtonClicked(e)"
        />
      </div>
      <Review
        :event="selectedEvent"
        @close="closeReviewModal"
        v-if="showReviewModal"
      />
    </div>
  </div>
</template>

<script>
import Review from "@/components/Review.vue";
import EventItem from "@/components/EventItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Review,
    EventItem,
  },

  computed: {
    ...mapGetters(["listOfAttendedEvents"]),
  },

  methods: {
    reviewButtonClicked(e) {
      this.selectedEvent = e;
      this.showReviewModal = true;
    },

    closeReviewModal() {
      this.selectedEvent = null;
      this.showReviewModal = false;
    },
  },
  data() {
    return {
      showReviewModal: false,
      selectedEvent: null,
    };
  },
};
</script>

<style>
.profileContainer {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 5em;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: lightgray;
}
.profileContentContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.myAttendedEvents {
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  background-color: white;
}

.addReviewContainer {
  display: flex;
  flex-direction: row;
  background-color: seagreen;
}
</style>
