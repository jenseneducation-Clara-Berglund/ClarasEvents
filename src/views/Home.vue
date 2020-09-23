<template>
  <div class="homeContainer">
    <p>CLARAS EVENTS</p>
    <Button />
    <EventItem />
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import EventItem from "@/components/EventItem.vue"

export default {
  name: "Home",
  components: {
    Button,
    EventItem
  }
}
</script>

<style></style>
