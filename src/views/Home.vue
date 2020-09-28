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
      <EventDetail v-if="showModal" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import EventItem from "@/components/EventItem.vue";
import EventDetail from "@/components/EventDetail.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Button,
    EventItem,
    EventDetail,
  },

  computed: {
    ...mapGetters(["listOfEvents"]),
  },

  methods: {
    profileButtonClicked() {},
  },

  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style></style>
