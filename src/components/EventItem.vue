<template>
  <div class="eventItemContainer" v-on:click="$emit('clicked', event)">
    <img class="image" :src="require('@/assets/' + event.image)" />
    <div class="name">{{ event.name }}</div>
    <div class="date">{{ event.date }}</div>
    <div
      style="font-weight: bold"
      id="reviewButton"
      v-if="showReviewButton"
      v-on:click="$emit('review-button-clicked', event)"
    >
      Reviews
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
    showReviewButton: Boolean,
  },
};
</script>

<style >
.eventItemContainer {
  display: flex;
  flex-direction: column;
  padding: 2em;
}

.image {
  height: 10em;
  width: 12em;
  border-radius: 0.3em;
}

.name {
  display: flex;
  align-content: center;
}

.date {
  display: flex;
  align-content: flex-end;
}

.buttonsContainer {
  display: flex;
  justify-content: space-evenly;
}
</style>
