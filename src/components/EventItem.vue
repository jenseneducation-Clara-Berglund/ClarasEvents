<template>
  <div class="eventItemContainer">
    <img class="image" :src="require('@/assets/' + event.image)" />
    <div class="name">{{ event.name }}</div>
    <div class="date">{{ event.date }}</div>
    <div class="info">{{ event.info }}</div>
    <p>This is an upcoming event</p>
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  }
}
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
