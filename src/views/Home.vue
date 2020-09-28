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
        @clicked="showEventModal(e)"
      />
      <EventDetail
        v-bind:event="this.event"
        v-if="showModal"
        @close="closeEventModal"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import EventItem from "@/components/EventItem.vue"
import EventDetail from "@/components/EventDetail.vue"
import { mapGetters } from "vuex"

export default {
  name: "Home",
  components: {
    Button,
    EventItem,
    EventDetail
  },

  computed: {
    ...mapGetters(["listOfEvents"])
  },

  methods: {
    profileButtonClicked () {},
    closeEventModal () {
      this.showModal = false
    },
    showEventModal (e) {
      this.event = e
      this.showModal = true
    }
  },

  data () {
    return {
      showModal: false,
      event: null
    }
  }
}
</script>

<style></style>
