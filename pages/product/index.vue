<template>
    <h1 style="margin-left:43%">PRODUCT LIST</h1>
  <div class="main">
    
    <div v-for="i in products" :key="i" class="card" >
        
      <!-- <NuxtLink :to="`/product/${i.id}`">{{ i.title }}</NuxtLink> -->
      
    <!-- Your accessing the component --><ProductCard  :product="i" />   <!-- Define a prop from the link and for loop -->
    </div>
  </div>
</template>
 <!-- 1st step -->
<!-- <script setup>

definePageMeta({
  layout: "product",
});


const { data: products } = await useFetch("https://fakestoreapi.com/products");


useHead({
  title:"Nuxt Shravan Index product page",
  meta:[{
    name:"description",content:"inddex------page"
  }]
})
</script> -->


<!-- 2nd step -->

<script setup>
     let products= ref([])

async function hi(){
  const { data } = await useFetch("https://fakestoreapi.com/products");
  products.value=data.value;
  console.log(products.value);
}
hi();


definePageMeta({
  layout: "product",
});
useHead({
  title:"Nuxt Shravan Index product page",
  meta:[{
    name:"description",content:"INDEX------page"
  }]
})
</script>

<!-- 3rd step -->
<!-- <script setup>
    let products= ref([])


onMounted(async ()=>{
  const { data } = await ofetch('https://fakestoreapi.com/products');
  products.value=data.value;

  console.log(products.value);
})

definePageMeta({
  layout: "product",
});
useHead({
  title:"Nuxt Shravan Index product page",
  meta:[{
    name:"description",content:"inddex------page"
  }]
})
</script> -->
<style scoped>

.main{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    column-gap: 12px;
    row-gap: 12px;
    
  

}
*{
    background-color:#fff;
}
</style>