<template>
  <div class="profileContainer">
    <div class="profileContentContainer">
      <div class="myAttendedEvents"></div>
      <div class="addReviewContainer"></div>
      <Button @clicked="reviewButtonClicked()" title="Add your review" />
      <Review v-if="showReviewModal" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Review from "@/components/Review.vue";
export default {
  components: {
    Button,
    Review,
  },
  methods: {
    reviewButtonClicked() {
      this.showReviewModal = true;
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
  height: 10em;
  background-color: skyblue;
}
.myAttendedEvents {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 10em;
  background-color: purple;
}

.addReviewContainer {
  display: flex;
  flex-direction: row;
  height: 20em;
  background-color: seagreen;
}
</style>
