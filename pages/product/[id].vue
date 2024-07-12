<template>
    <Head>
  
      <Title >{{products.title}}</Title>
      <Meta name="description" :content="products.description" />
    </Head>
  <!-- <h1>{{ products.id }}</h1>
  <h1>{{ products.title }}</h1>
  <h1> {{ products.price }}  </h1>
  <h1>{{ products.category }}</h1> -->
  <div >
    <ProductDetails :product="products" />   <!-- this will take from link and create prop-->
  </div>

</template>
<script setup>
//routing       it takes id from params
const { id } = useRoute().params;
console.log(useRoute().params);

//routing
definePageMeta({
  layout: "product",
});
//fetching data
const url = `https://fakestoreapi.com/products/${id}`;
const { data: products } = await useFetch(url);
//fetching data
if(!products.value){
  throw createError({statusCode:404, statusMessage:"Product Not Found",fatal:true})
}
</script>
<style scoped>
div{
margin-top: 75px;
}
</style>
