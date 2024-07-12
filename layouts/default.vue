<template>

    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/product">Home</NuxtLink></li>
                <li><NuxtLink to="/product/about">About</NuxtLink></li>
            </ul>
        </nav>
    </header>

    <div>
        <slot />
    </div>
</template>
<style scoped>
.router-link-exact-active{
    color: red;
}
</style>