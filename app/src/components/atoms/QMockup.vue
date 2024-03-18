<template>
    <div class="mockup">
        <div class="mockup__artboard">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mockup {
    width: fit-content;
    border-radius: 30px;
    padding: 16px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);

    .mockup__artboard {
        width: 320px;
        height: 620px;
        border-radius: 8px;
        overflow: auto;
    }
}
</style>
