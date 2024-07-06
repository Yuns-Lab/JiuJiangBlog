<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const thisEl1 = ref();
const thisEl2 = ref();
const thisEl3 = ref();
const thisEl4 = ref();
const thisEl5 = ref();
const isenabled1 = ref(false);

const clickHandler = (e: MouseEvent) => {
    if (
        e.target === thisEl1.value ||
        e.target === thisEl2.value ||
        e.target === thisEl3.value ||
        e.target === thisEl4.value ||
        e.target === thisEl5.value
    ) {
        isenabled1.value = !isenabled1.value;
    } else {
        isenabled1.value = false;
    }
};

onMounted(() => {
    window.addEventListener("click", clickHandler);
});
onUnmounted(() => {
    window.removeEventListener("click", clickHandler);
});
</script>

<template>
    <div class="pdmenu">
        <i class="icon" ref="thisEl1">
            <svg
                ref="thisEl2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path
                    ref="thisEl3"
                    style="fill: none"
                    d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
            </svg>
            <svg
                ref="thisEl4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                style="transform: rotate(90deg) scale(0.8); margin-left: 4px">
                <path d="m9 18 6-6-6-6" style="fill: none" ref="thisEl5" />
            </svg>
        </i>
        <div class="pulldown" :class="{ enable: isenabled1 }">
            <span class="pditem normalink this" style="letter-spacing: initial">
                简体中文
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
div.pdmenu {
    position: relative;
    div.pulldown {
        position: absolute;
        background-color: var(--color-pd-bg);
        display: flex;
        right: 0;
        top: calc(100% + 12px);
        border-radius: 12px;
        padding: 8px;
        min-width: 128px;
        max-height: calc(100vh - 64px);
        border: 1px solid var(--color-pd-border);
        box-shadow: var(--shadow-pd);
        transition: background-color 0.5s;
        overflow-y: auto;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        pointer-events: none;
        z-index: 1;
        &.enable {
            opacity: 1;
            pointer-events: initial;
        }
    }
}

i.icon {
    fill: var(--color-fg);
    transition: opacity 0.5s ease-in-out;
    cursor: pointer;
    opacity: 1;
    &:hover {
        opacity: 0.7;
    }
    svg {
        width: 1.2em;
        height: 1.2em;
    }
}

span.pditem {
    padding: 10px 16px;
    width: 100%;
    border-radius: 6px;
    background-color: transparent;
    transition: background-color 0.25s ease-in-out;
    &:not([disabled]):hover {
        background-color: var(--color-pd-itembg);
    }
    &[disabled] {
        opacity: 0.2;
    }
}
</style>
