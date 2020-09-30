<template>
  <div class="profileContainer">
    <div class="profileContentContainer">
      <div class="myAttendedEvents">
        <EventItem
          class="eventItem"
          v-for="e in listOfAttendedEvents"
          v-bind:event="e"
          :key="e.id"
        />
        <Button @clicked="reviewButtonClicked" :title="Review" />
      </div>
      <Review @close="closeReviewModal" v-if="showReviewModal" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Review from "@/components/Review.vue";
import EventItem from "@/components/EventItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Button,
    Review,
    EventItem,
  },

  computed: {
    ...mapGetters(["listOfAttendedEvents"]),
  },

  methods: {
    reviewButtonClicked() {
      this.showReviewModal = true;
    },

    closeReviewModal() {
      this.showReviewModal = false;
    },
  },
  data() {
    return {
      showReviewModal: false,
    };
  },
};
</script>

<style>
.profileContentContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10em;
  background-color: skyblue;
}
.myAttendedEvents {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
  background-color: purple;
}

.addReviewContainer {
  display: flex;
  flex-direction: row;
  height: 20em;
  background-color: seagreen;
}
</style>
