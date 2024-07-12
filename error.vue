<template>
  <div class="parent">
    <div class="error">
      <p>{{ error.statusCode }}</p>
      <p>Oooops......</p>
      <p>{{ error.message }}</p>
      <button v-on:click="errorHandle">Go Home</button>
    </div>
  </div>
</template>

<script setup>

defineProps(["error"]);
const errorHandle=()=>{
    clearError({redirect:'/'})
}
</script>

<style scoped>
.parent {
  display: flex;
  align-items: center;
  align-content: flex-end;
  justify-content: center;

  height: 85vh;
}
.error {
  width: 40%;
  height: 70%;
  background-color: azure;
  box-shadow: 7px 5px 10px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  justify-content: center;
}
.error p:nth-child(1) {
  font-size: 85px;
}
.error p:nth-child(2) {
  font-size: 65px;
}
.error p:nth-child(3) {
  font-size: 45px;
}
button {
    background-color:forestgreen;
  border-radius: 8px;
  border: none;
    width: 150px;
    padding: 4px;
    font-size: 15px;
    height: 34px;
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: 2px;
  }
</style>
