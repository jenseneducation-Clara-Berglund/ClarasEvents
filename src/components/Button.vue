<template>
  <div class="buttonContainer" v-on:click="$emit('clicked')">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>
.buttonContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #caff8a;
  height: 4em;
  min-width: 3em;
  max-width: 6em;
}
.buttonContainer > p {
  color: black;
  font-size: 1em;
}
</style>
