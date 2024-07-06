<script setup lang="ts">
import AuthorCard from "@/components/Home/AuthorCard.vue";
import MainCard from "@/components/Home/MainCard.vue";
import { ElScrollbar } from "element-plus";
</script>

<template>
    <div id="home">
        <div class="left">
            <AuthorCard class="authorcard" />
        </div>
        <div class="center">
            <ElScrollbar>
                <MainCard />
            </ElScrollbar>
        </div>
    </div>
</template>

<style scoped lang="scss">
div#home {
    display: grid;
    grid-template-columns: 1fr 2fr 0.3fr !important;
    column-gap: 90px;
    grid-template: "left right";
    width: 100vw;
    height: 100vh;
    position: relative;
}

div.left {
    grid-area: left;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    .authorcard {
        position: fixed;
        top: 120px;
    }
}
div.center {
    grid-area: right;
    width: 100%;
    height: 100%;
    position: relative;
    top: 95px;
}
</style>
