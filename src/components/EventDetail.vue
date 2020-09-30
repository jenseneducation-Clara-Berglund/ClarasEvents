<template>
  <div class="eventDetailContainer">
    <div class="contentContainer">
      <div class="buttonAndImageContainer">
        <div class="closeButtonContainer">
          <CloseButton @clicked="$emit('close')" />
        </div>
        <img class="eventImage" :src="require('@/assets/' + event.image)" />
      </div>
      <div class="textsContainer">
        <div class="eventDateContainer">{{ event.date }}</div>
        <div class="eventInfoContainer">{{ event.info }}</div>
      </div>
      <div class="actionButtonsContainer">
        <div class="actionButtonContainer" v-on:click="$emit('join-event')">
          {{ "Join Event" }}
        </div>
      </div>
    </div>
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

<style lang="scss">
.closeButtonContainer {
  height: 4em;
  width: 4em;
  background-color: white;
  border-radius: 2em;
  margin-right: -1.5em;
  margin-bottom: -2.5em;
  z-index: 1;
}
.eventDetailContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
}
.contentContainer {
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  display: flex;
  height: 100%;
}

.buttonAndImageContainer {
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
}

.eventDateContainer {
  font-size: 2em;
  align-self: flex-start;
}
.eventImage {
  width: 100%;
}
.textsContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
}
.actionButtonContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  font-weight: bold;
  color: white;
  margin-right: 2em;
}
.actionButtonsContainer {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
}
</style>
