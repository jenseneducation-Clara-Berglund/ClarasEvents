<template>
  <div class="reviewContainer">
    <div class="commentContainer"></div>
    <Button />
    <CloseButton @clicked="$emit('close')" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import CloseButton from "@/components/CloseButton.vue";
export default {
  components: {
    Button,
    CloseButton,
  },
};
</script>

<style>
.reviewContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>