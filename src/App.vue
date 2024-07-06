<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <NavBar class="nav" />
    <RouterView class="rvct" />
</template>

<style scoped>
.nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}
.rvct {
    margin-top: 64px;
    width: 100%;
    height: 100%
}
</style>
