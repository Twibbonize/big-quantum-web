<script setup></script>

<template>
    <div class="search flex p-0">
        <input
            type="text"
            name="navigation-search"
            id="navigation-search"
            placeholder="Find Campaigns or Creators"
        />
        <i class="ri-search-line text-xl font-bold" role="button"></i>
    </div>
</template>

<style lang="scss">
.search {
    background: var(--color-white);
    position: relative;
    height: 52px;
    border-radius: 26px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
    max-width: 521px;
    width: 100%;

    input {
        width: 100%;
        border: none !important;
        height: 52px !important;
        border-radius: 26px;
        padding: 13.5px 54px 13.5px 18px;
    }

    i {
        position: absolute;
        right: 18px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
