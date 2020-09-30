<template>
  <div class="reviewContainer">
    <div class="commentContainer">
      <CloseButton class="closeButtonContainer" @clicked="$emit('close')" />
      <h3>Reviews</h3>
      <div class="reviewsContainer">
        <p v-for="review in getEventReviews()" :key="review.comment">
          {{ review.comment }}
        </p>
      </div>
      <textarea
        rows="2"
        cols="40"
        style="margin-top: 10em"
        v-model="message"
        placeholder="start writing your review!"
      >
      </textarea>

      <div class="submitButton" v-on:click="submitReviewButtonPressed()">
        <p>SUBMIT</p>
      </div>
    </div>
  </div>
</template>

<script>
import CloseButton from "@/components/CloseButton.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    event: Object,
  },
  components: {
    CloseButton,
  },
  data() {
    return {
      message: "",
    };
  },

  methods: {
    ...mapActions(["addEventReview"]),
    submitReviewButtonPressed() {
      this.addEventReview({ eventId: this.event.id, comment: this.message });
      this.message = "";
    },
    getEventReviews() {
      return this.listOfEventReviews.filter(
        (eventReview) => eventReview.eventId === this.event.id
      );
    },
  },
  computed: {
    ...mapGetters(["listOfEventReviews"]),
  },
};
</script>

<style scoped>
.reviewContainer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.reviewsContainer {
  max-height: 10em;
  overflow: scroll;
}

.commentContainer {
  width: 60%;
  height: 60%;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  background-color: beige;
}

.closeButtonContainer {
  height: 4em;
  width: 4em;
  background-color: white;
  align-self: flex-end;
  z-index: 1;
  margin-top: -1.5em;
}

/* .inputField {
 
} */
</style>