<template>
  <div class="closeButtonContainer" v-on:click="$emit('clicked')">
    <img class="closeButtonImg" :src="require('@/assets/CloseIcon.svg')" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.closeButtonImg {
  height: 4em;
}
</style>
