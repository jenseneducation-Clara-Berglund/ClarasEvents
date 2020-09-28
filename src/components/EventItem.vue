<template>
  <div class="eventItemContainer" v-on:click="$emit('clicked', event)">
    <img class="image" :src="require('@/assets/' + event.image)" />
    <div class="name">{{ event.name }}</div>
    <div class="date">{{ event.date }}</div>
    <div class="info">{{ event.info }}</div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
  },
};
</script>

<style>
.eventItemContainer {
  background-color: salmon;
}

.image {
  height: 10em;
  width: 12em;
}
</style>
