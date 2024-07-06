<script setup lang="ts">
import { onMounted, ref } from "vue";

const details = ref();

const data = defineProps({
    havelink: Boolean,
    link: String,
    title: String,
    details: String,
});

onMounted(() => {
    if (data.details) {
        details.value.innerHTML = data.details;
    }
});
</script>

<template>
    <component
        :is="data.havelink ? 'a' : 'div'"
        :href="data.link"
        target="_blank"
        class="card-default"
        :class="{ 'no-link': !data.havelink }">
        <slot name="icon"></slot>
        <div class="right">
            <slot name="right">
                <h4>
                    {{ data.title }}
                </h4>
            </slot>
            <slot name="details">
                <span small op-70 ref="details"></span>
            </slot>
        </div>
    </component>
</template>

<style scoped lang="scss">
.card-default {
    display: flex;
    flex-direction: initial;
    align-items: center;
    gap: 1em;
    padding: 1.2em;
    margin: 0 1px;
    border: 0;
    border-radius: 10px;
    z-index: 1;
    transition: all 0.2s ease-in-out 0s;

    background-color: var(--color-dsc-bg);
    text-decoration: none !important;
    color: inherit;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px,
        rgba(0, 0, 0, 0.2) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.12) 0px -3px 0px inset;

    &.no-link {
        background-color: var(--color-dsc-bg);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0 0, rgba(0, 0, 0, 0.2) 0px 0 0 1px,
            rgba(0, 0, 0, 0.12) 0px 0 0px inset;
        h4 {
            color: var(--color-fg) !important;
        }
    }

    .active-dot {
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background: #1b1b1b;
    }

    &:hover,
    &:active {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0 0, rgba(0, 0, 0, 0.2) 0px 0 0 1px,
            rgba(0, 0, 0, 0.12) 0px 0 0px inset;
        h4 {
            color: var(--color-link);
        }
    }

    .icon,
    img {
        width: 3em;
        height: 3em;
        object-fit: contain;
    }

    h4 {
        position: relative;
        font-weight: 600;
        outline: none;
        overflow-wrap: break-word;
        margin: 0;
        line-height: 24px;
        font-size: 16px;
        transition: color 0.2s ease-in-out;
    }

    span[small] {
        display: inline-block;
        height: 3em;
        text-overflow: ellipsis;
        font-size: smaller;
        margin-top: 4px;
        margin-bottom: -6px;
        &[op-70] {
            opacity: 0.7;
        }
    }
}
</style>
