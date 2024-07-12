<template>
  <div class="card">
    <img v-bind:src="product.image" alt="" />
    <p>{{ product.title }}</p>
    <button>
      <NuxtLink
        :to="`/product/${product.id}`"
        style="text-decoration: none; color: black"
        >View Details</NuxtLink
      >
    </button>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]); // define the prop
</script>

<style scoped>
.card {
    width: 300px;
    height: 300px;
    background-color:azure;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 2px 2px 2px 2px;
}
.card img {
    width: 212px;
    height: 163px;
}
button {
  background-color:aliceblue;

  width: 150px;
  padding: 4px;
  font-size: 15px;
  height: 34px;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 2px;
}
</style>