<template>
  <div class="eventDetailContainer">
    <div class="ContentContainer">
      <img
        class="eventImgContainer"
        :src="require('@/assets/' + event.image)"
      />
      <CloseButton @clicked="$emit('close')" />
      <div class="eventDateContainer">{{ event.date }}</div>
      <div class="eventInfoContainer">{{ event.info }}</div>
    </div>
    <Button title="Join Event" />
  </div>
</template>

<script>
import CloseButton from "@/components/CloseButton.vue";
export default {
  props: {
    event: Object,
  },
  components: {
    CloseButton,
  },
};
</script>

<style>
.eventDetailContainer {
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
