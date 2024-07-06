<script setup lang="ts">
import {
    owner_name,
    owner_avatar,
    owner_area,
    owner_email,
    owner_github,
    owner_bilibili,
} from "@/blog.config";
</script>

<template>
    <div class="AuthorCard">
        <img :src="owner_avatar" class="avatar" alt="头像" />
        <span class="name font-steps">{{ owner_name }}</span>
        <div class="addrinfo" fadeup>
            <small>
                <i class="icon">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3" />
                        <path
                            d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395" />
                    </svg>
                </i>
                <a target="_blank" class="infolink">
                    {{ owner_area || "未知" }}
                </a>
            </small>
            <small>
                <i class="icon">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z" />
                    </svg>
                </i>
                <a
                    class="infolink"
                    :href="`mailto:${owner_email}`"
                    v-if="owner_email">
                    {{ owner_email }}
                </a>
                <a v-else class="infolink"> {{ "未知" }} </a>
            </small>
        </div>
        <div class="outlink" fadeup>
            <a :href="owner_github" v-if="owner_github" target="_blank">
                <img src="/github.png" alt="github" class="ol-icon" />
            </a>
            <a :href="owner_bilibili" v-if="owner_bilibili" target="_blank">
                <img src="/bilibili.png" alt="bilibili" class="ol-icon" />
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.font-steps {
    overflow: hidden;
    width: 0;
    text-wrap: nowrap;
    animation: 1.3s text-steps-in ease-in-out forwards;
}
@keyframes text-steps-in {
    from {
        width: 0;
    }
    to {
        width: 8em;
    }
}

div.AuthorCard {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: max-content;
    align-items: center;
    img.avatar {
        border-radius: 0.75em;
        transition: border-radius 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        width: 75px;
        border: 1px solid var(--color-border-2);
        &:hover {
            border-radius: 50%;
        }
    }
    span.name {
        text-align: center;
        position: relative;
        font-weight: 600;
        outline: none;
        letter-spacing: -0.01em;
        line-height: 28px;
        font-size: 20px;
    }
    div.addrinfo {
        width: 100%;
        border-top: 1px solid var(--color-border-2);
        border-bottom: 1px solid var(--color-border-2);
        padding-top: 12px;
        padding-bottom: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        small {
            display: flex;
            gap: 12px;
            i.icon {
                svg {
                    width: 1.2em;
                    height: 1.2em;
                    path {
                        fill: var(--color-fg);
                    }
                }
            }
        }
    }
    div.outlink {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        padding: 6px 0 0 12px;
        gap: 12px;
        a img {
            width: 27px;
            border-radius: 5px;
        }
    }
}
</style>
