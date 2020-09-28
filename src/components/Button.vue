<template>
  <div class="buttonContainer" v-on:click="$emit('clicked')">
    {{ title }}
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
  background-color: lightpink;
  height: 4em;
  min-width: 3em;
  max-width: 9em;
}
</style>
