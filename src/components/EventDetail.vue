<template>
  <div class="eventDetailContainer">
    <div class="ContentContainer">
      <img
        class="eventImgContainer"
        :src="require('@/assets/' + event.image)"
      />
      <div class="eventDateContainer">{{ event.date }}</div>
      <div class="eventInfoContainer">{{ event.info }}</div>
      <CloseButton />
      <Button title="Join Event" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  }
}
</script>

<style></style>
