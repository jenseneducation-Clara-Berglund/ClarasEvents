<template>
  <div class="joinEventContainer">
    <Form />
  </div>
</template>

<script>
import EventItem from "@/components/EventItem.vue";
import EventDetail from "@/components/EventDetail.vue";
import Form from "@/components/Form.vue";

export default {
  components: {
    EventItem,
    EventDetail,
    Form,
  },
};
</script>

<style>
</style>