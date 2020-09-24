<template>
  <div class="homeContainer">
    <p>CLARAS EVENTS</p>
    <div class="buttonContainer">
      <Button :click="profileButtonClicked" />
      <EventItem
        class="eventItem"
        v-for="e in listOfEvents"
        v-bind:event="e"
        :key="e.id"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import EventItem from "@/components/EventItem.vue"
import { mapGetters } from "vuex"

export default {
  name: "Home",
  components: {
    Button,
    EventItem
  },

  computed: {
    ...mapGetters(["listOfEvents"])
  },

  methods: {
    profileButtonClicked () {} // skriva func för detta.
  }
}
</script>

<style></style>
