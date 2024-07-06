<script setup lang="ts">
import { about_me, whibd_left, project, friend } from "@/blog.config";

import { onMounted, ref } from "vue";
import { default as DefaultCard } from "./DefaultSubcard.vue";

const version = ref("v1.0.0");
onMounted(() => {
    fetch(
        "https://api.github.com/repos/lingyunawa/lingyunawa.github.io/releases/latest"
    ).then((res) => {
        res.json()
            .then((data) => {
                version.value = data.tag_name || "v1.0.0";
            })
            .catch((_err) => {
                version.value = "v[Error On fetching Version]";
            });
    });
});
</script>

<template>
    <main class="base">
        <main fadeup>
            <h1>个人简介</h1>
            <p v-if="about_me.length < 1">💻 正在学习的独立开发者</p>
            <p v-else v-for="item in about_me" :key="item">{{ item }}</p>
        </main>
        <main fadeup fadeup-d-1>
            <h2>我一直在做什么</h2>
            <div class="grid">
                <DefaultCard
                    :havelink="false"
                    :title="whibd_left.title || `网页开发`"
                    :details="
                        whibd_left.desp ||
                        `一个热情创建创新和用户友好的Web应用程序的开发人员。`
                    ">
                    <template #icon>
                        <i class="icon">
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.502 5.387A.75.75 0 0 0 7.5 4.272L5.76 5.836c-.736.663-1.347 1.212-1.766 1.71c-.441.525-.755 1.088-.755 1.784c0 .695.314 1.258.755 1.782c.42.499 1.03 1.049 1.766 1.711l1.74 1.564a.75.75 0 1 0 1.003-1.115l-1.696-1.527c-.788-.709-1.32-1.19-1.663-1.598c-.33-.393-.403-.622-.403-.817c0-.196.072-.425.403-.818c.344-.409.875-.889 1.663-1.598zm6.941 5.111a.75.75 0 0 1 1.06-.055l1.737 1.563c.736.663 1.347 1.213 1.766 1.711c.441.524.755 1.088.755 1.783c0 .695-.314 1.259-.755 1.783c-.42.498-1.03 1.048-1.766 1.71l-1.738 1.565a.75.75 0 1 1-1.003-1.116l1.696-1.526c.788-.71 1.32-1.19 1.663-1.599c.33-.392.403-.622.403-.817c0-.195-.072-.425-.403-.817c-.344-.41-.875-.89-1.663-1.599L15.5 11.557a.75.75 0 0 1-.056-1.059" />
                                <path
                                    fill="currentColor"
                                    d="M14.18 4.275a.75.75 0 0 1 .532.918l-3.987 15a.75.75 0 0 1-1.45-.386l3.987-15a.75.75 0 0 1 .918-.532"
                                    opacity=".5" />
                            </svg>
                        </i>
                    </template>
                </DefaultCard>
                <DefaultCard
                    :havelink="false"
                    :title="version"
                    :details="`该博客已经更新到最新版本，其设计更现代，响应迅速。`">
                    <template #icon>
                        <i class="icon">
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g stroke="currentColor" stroke-width="1.5">
                                    <path
                                        style="fill: none"
                                        d="M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413c-4.94 4.939-10.945 6.94-13.414 4.471c-2.47-2.47-.468-8.474 4.471-13.413S18.473.589 20.942 3.058Zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413c4.94 4.939 10.945 6.94 13.414 4.471c2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058Z" />
                                    <path
                                        style="fill: none"
                                        d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
                                </g>
                            </svg>
                        </i>
                    </template>
                </DefaultCard>
            </div>
        </main>
        <main fadeup fadeup-d-2>
            <h2>项目</h2>
            <div class="part-container">
                <div class="grid">
                    <DefaultCard
                        v-if="project.length < 1"
                        :havelink="false"
                        :title="`暂无`"
                        :details="`即将推出我多年以来的产品<br>期待我的后续开发！`">
                        <template #icon>
                            <i class="icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="1.2em"
                                    height="1.2em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd">
                                        <path
                                            d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
                                        <path
                                            d="M12 3.25c-4.514 0-7.555 2.704-9.32 4.997l-.031.041c-.4.519-.767.996-1.016 1.56c-.267.605-.383 1.264-.383 2.152c0 .888.116 1.547.383 2.152c.25.564.617 1.042 1.016 1.56l.032.041C4.445 18.046 7.486 20.75 12 20.75c4.514 0 7.555-2.704 9.32-4.997l.031-.041c.4-.518.767-.996 1.016-1.56c.267-.605.383-1.264.383-2.152c0-.888-.116-1.547-.383-2.152c-.25-.564-.617-1.041-1.016-1.56l-.032-.041C19.555 5.954 16.514 3.25 12 3.25M3.87 9.162C5.498 7.045 8.15 4.75 12 4.75c3.85 0 6.501 2.295 8.13 4.412c.44.57.696.91.865 1.292c.158.358.255.795.255 1.546s-.097 1.188-.255 1.546c-.169.382-.426.722-.864 1.292C18.5 16.955 15.85 19.25 12 19.25c-3.85 0-6.501-2.295-8.13-4.412c-.44-.57-.696-.91-.865-1.292c-.158-.358-.255-.795-.255-1.546s.097-1.188.255-1.546c.169-.382.426-.722.864-1.292" />
                                    </g>
                                </svg>
                            </i>
                        </template>
                    </DefaultCard>
                    <DefaultCard
                        v-else
                        v-for="pj in project"
                        :key="pj.title"
                        :havelink="Boolean(pj.link)"
                        :title="pj.title || `未命名项目`"
                        :details="pj.desp || `这是我开发的一个项目`">
                        <template #icon>
                            <img v-if="pj.logo" :src="pj.logo" alt="产品图标" />
                            <i v-else class="icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="1.2em"
                                    height="1.2em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd">
                                        <path
                                            d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
                                        <path
                                            d="M12 3.25c-4.514 0-7.555 2.704-9.32 4.997l-.031.041c-.4.519-.767.996-1.016 1.56c-.267.605-.383 1.264-.383 2.152c0 .888.116 1.547.383 2.152c.25.564.617 1.042 1.016 1.56l.032.041C4.445 18.046 7.486 20.75 12 20.75c4.514 0 7.555-2.704 9.32-4.997l.031-.041c.4-.518.767-.996 1.016-1.56c.267-.605.383-1.264.383-2.152c0-.888-.116-1.547-.383-2.152c-.25-.564-.617-1.041-1.016-1.56l-.032-.041C19.555 5.954 16.514 3.25 12 3.25M3.87 9.162C5.498 7.045 8.15 4.75 12 4.75c3.85 0 6.501 2.295 8.13 4.412c.44.57.696.91.865 1.292c.158.358.255.795.255 1.546s-.097 1.188-.255 1.546c-.169.382-.426.722-.864 1.292C18.5 16.955 15.85 19.25 12 19.25c-3.85 0-6.501-2.295-8.13-4.412c-.44-.57-.696-.91-.865-1.292c-.158-.358-.255-.795-.255-1.546s.097-1.188.255-1.546c.169-.382.426-.722.864-1.292" />
                                    </g>
                                </svg>
                            </i>
                        </template>
                    </DefaultCard>
                </div>
                <a href="#project" class="rb-button">查看全部!</a>
            </div>
        </main>
        <main fadeup fadeup-d-3>
            <h3>合作伙伴</h3>
            <div class="part-container">
                <div class="grid">
                    <DefaultCard
                        v-if="friend.length < 1"
                        :havelink="false"
                        :title="`暂无`"
                        :details="`欢迎申请成为我的合作伙伴<br>一起交流学习开发技术！`">
                        <template #icon>
                            <img src="/person.png" width="48" />
                        </template>
                    </DefaultCard>
                    <DefaultCard
                        v-else
                        v-for="fp in friend"
                        :havelink="Boolean(fp.link)"
                        :title="fp.name || `不知道叫啥的朋友`"
                        :details="fp.desp || `和 Ta 关系很好`"
                        :link="fp.link">
                        <template #icon>
                            <img :src="fp.avatar || `/person.png`" width="48" />
                        </template>
                    </DefaultCard>
                </div>
                <a href="#friends" class="rb-button">成为合作伙伴!</a>
            </div>
        </main>
        <footer fadeup fadeup-d-4>
            <span>采用 Apache-2.0 license 协议</span>
            <span>Copyright © 2024 LingyunAwA</span>
        </footer>
    </main>
</template>

<style scoped lang="scss">
main.base {
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
        letter-spacing: -0.02em;
        line-height: 40px;
        font-size: 32px;
        position: relative;
        font-weight: 600;
        outline: none;
        margin-bottom: 4px;
    }
    h2 {
        width: 100%;
        margin: 58px 0 16px;
        border-top: 1px solid var(--color-border-2);
        padding-top: 36px;
        letter-spacing: -0.02em;
        line-height: 32px;
        font-size: 24px;
        position: relative;
        font-weight: 600;
        outline: none;
    }
    h3 {
        margin: 64px 0 0;
        letter-spacing: -0.01em;
        line-height: 28px;
        font-size: 20px;
        position: relative;
        font-weight: 600;
        outline: none;
    }
    p {
        margin: 8px 0;
        line-height: 28px;
    }
    footer {
        margin-top: 64px;
        border-top: 1px solid var(--color-border-2);
        padding-top: 32px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        margin-bottom: 24px;
    }
}

div.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 640px) {
    div.grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

i.icon {
    svg {
        width: 2em;
        height: 2em;
        path {
            fill: var(--color-fg);
        }
    }
}

a.rb-button {
    color: var(--color-link);
    background-color: var(--color-btn-bg);
    outline: none;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    padding: 0.8rem;
    padding-left: 1.3rem;
    padding-right: 1.3rem;
    margin-top: 1.5rem;
    margin-left: auto;
    width: fit-content;
    display: block;
    font-size: 16px;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
    }
}
</style>
