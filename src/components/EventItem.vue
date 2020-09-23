<template>
  <div class="eventItemContainer">
    <p>This is an upcoming event</p>
    <div class="eventName"/>

  </div>
</template>

<script>
export default {
  props: {
    image: String,
    imageHeight: String,
    name: String

  }
}
</script>

<style>
</style>
<script>

//   <div class="product-item">
//     <img class="image" :height="imgHeight"
//     :src="image" />
//     <div class="name">{{ name }}</div>
//     <div class="price">{{ price }}</div>
//   </div>
// </template>

// export default {
//   props: {
//     price: Number,
//     name: String,
//     image: String,
//     imgHeight: String
//   },
// };
