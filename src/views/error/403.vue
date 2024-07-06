<template>
    <main>
        <div class="errmsg">
            <h1 class="ec" fadeup>403</h1>
            <h2 class="ed" fadeup fadeup-d-2>访问被阻止</h2>
            <div class="split" fadeup fadeup-d-2></div>
            <blockquote fadeup fadeup-d-3>
                您没有权限访问这个资源，但是请不要灰心，总有一天你能找到正确进入的道路的。
            </blockquote>
            <p fadeup fadeup-d-3></p>
            <a href="#" fadeup fadeup-d-3>返回首页</a>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    width: 100%;
    height: calc(100vh - 64px) !important;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    div.errmsg {
        transform: translateY(-10%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        h1.ec {
            line-height: 64px;
            font-size: 64px;
            font-weight: 600;
        }
        h2.ed {
            letter-spacing: 2px;
            line-height: 20px;
            font-size: 20px;
            font-weight: 700;
        }
        div.split {
            width: 64px;
            height: 1px;
            margin: 24px auto 18px;
            background-color: var(--color-border-2);
        }
        blockquote {
            margin: 0 auto;
            max-width: 226px;
            font-size: 14px;
            font-weight: 500;
            color: var(--color-err-tip);
        }
        a {
            display: inline-block;
            border: 1px solid var(--color-link);
            border-radius: 16px;
            padding: 6px 16px;
            font-size: 14px;
            font-weight: 500;
            color: var(--color-link);
            transition: border-color 0.25s, color 0.25s;
        }
    }
}
</style>
