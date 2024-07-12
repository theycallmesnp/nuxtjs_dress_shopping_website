<template>
    <div>
<h1>About Page</h1>
<div>
   {{data}}
</div>

 </div>
</template>

<script setup>
definePageMeta({
    layout:'product'
})
const {data} = await useFetch('/api/ninja')         
</script>

<style scoped>

</style>