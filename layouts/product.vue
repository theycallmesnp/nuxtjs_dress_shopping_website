<template>
 
    <div>
        <header>
            <nav><NuxtLink to="/">SHRAVAN LOGO</NuxtLink></nav>
            <nav><NuxtLink to="/">HOME</NuxtLink></nav>
            <nav><NuxtLink to="/product/about">ABOUT</NuxtLink></nav>
            <button><NuxtLink to="/product">PRODUCT</NuxtLink></button>
        </header>
        <div>
            <h1></h1>
            <slot />
        </div>
        <!-- <footer>
            <nav><NuxtLink to="/">HOME</NuxtLink></nav>
            <nav><NuxtLink to="/product/about">ABOUT</NuxtLink></nav>
            <button><NuxtLink to="/product">Product</NuxtLink></button>
        </footer> -->
    </div>
</template>
<style scoped>
.router-link-exact-active{
    color:red
}
header[data-v-6f0489e4] {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
<script>

</script>
