<template>

  <div class="parent">
    <div class="details">
      <div><img :src="product.image" alt="" /></div>
      <div>
        <h2>{{ product.title }}</h2>
  
        <h3>Price -${{ product.price }}</h3>
        <p>{{ product.description }}</p>
        <button><NuxtLink to="/"><i class="fa fa-shopping-cart" style="font-size:16px" ></i>Add To Cart</NuxtLink></button>
      </div>
    </div>
  </div>
 
</template>

<script setup>
const { product } = defineProps(["product"]);   // define the prop
</script>

<style  scoped>
.details {
  background-color: azure;
  box-shadow: 7px 5px 10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 23px;
  width: 60%;
  -moz-column-gap: 12px;
  column-gap: 22px;
  border-radius: 12px;
 
  align-items: center;

}
img {
  max-width: 500px;
}
h2 {
  font-size: 43px;
}
h3 {
  font-size: 23px;
}
p:nth-child(3) {
  width: 90%;
  font-size: 23px;
}
.parent{
  display: flex;

   padding:80px;
  justify-content: space-around;
}
button {
  display: flex;
  background-color: forestgreen;
  color:aliceblue;
  border-radius: 8px;
  border: none;
  width: 200px;
  padding: 4px;
 font-size:16px;
  height: 44px;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 2px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
}
</style>