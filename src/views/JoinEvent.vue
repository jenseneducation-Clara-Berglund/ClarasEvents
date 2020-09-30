<template>
  <div class="joinEventContainer">
    <img
      class="backgroundImage"
      :src="require('@/assets/' + getBackgroundImageName())"
    />
    <Form />
  </div>
</template>

<script>
import EventItem from "@/components/EventItem.vue";
import EventDetail from "@/components/EventDetail.vue";
import Form from "@/components/Form.vue";
import { mapGetters } from "vuex";

export default {
  props: {
    event: Object,
  },
  components: {
    EventItem,
    EventDetail,
    Form,
  },
  methods: {
    getBackgroundImageName() {
      const eventId = parseInt(this.$route.params.id);
      const event = this.listOfEvents.find((event) => event.id === eventId);
      return event.image;
    },
  },
  computed: {
    ...mapGetters(["listOfEvents"]),
  },
};
</script>

<style>
.joinEventContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.backgroundImage {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  z-index: -1;
}
</style>