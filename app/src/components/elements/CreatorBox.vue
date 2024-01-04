<script setup>
import numeral from 'numeral';
import { RouterLink } from 'vue-router';

const props = defineProps({
    number: Number,
    name: String,
    avatar: String,
    supports: Number
});
</script>

<template>
    <RouterLink to="/u/universetech">
        <div class="top-author style-2 hv-border mb-6 w-full">
            <div class="order">{{ `#${props.number}` }}</div>
            <div class="author-avatar rounded-full">
                <img :src="avatar" alt="" class="avatar rounded-full" />
            </div>
            <div class="author-info">
                <h5>
                    <RouterLink to="/u/universetech">{{ name }}</RouterLink>
                </h5>
                <h6 class="price gem style-1">
                    <i class="ri-group-line"></i>{{ numeral(props.supports).format('0.0a') }}
                </h6>
            </div>
        </div>
    </RouterLink>
</template>

<style lang="scss">
.top-author {
    &:hover {
        cursor: pointer;
    }
}

.top-author .author-avatar {
    margin-bottom: 14px;
    position: relative;
}

.top-author .author-info h5 {
    font-size: 18px;
    font-weight: 800;
    line-height: 25px;
    margin-bottom: 4px;
}

.price.gem.style-1 {
    font-size: 14px;
}

.price.gem.style-1 i::before,
.price.gem.style-1 {
    color: rgba(255, 255, 255, 0.3);
    font-weight: 400;
}

/* top-author style-1 */
.top-author.style-1 {
    align-items: center;
    padding: 10px;
    border-radius: 10000px;
    background: rgba(255, 255, 255, 0.1);
    width: fit-content;
}

.top-author.style-1 .author-avatar {
    margin-right: 16px;
    margin-bottom: 0;
}

.top-author .author-avatar img {
    border-radius: 50%;
    aspect-ratio: 1;
    max-height: 80px;
    max-width: 80px;
}

.top-author .author-info .price.gem.style-1 i {
    font-size: 13px;
}

/* top-author bg-white */
.top-author.bg-white {
    background-color: #fff;
}

.top-author.bg-white .author-info h5 a {
    color: #161616;
}

.top-author.bg-white .author-info h5 a:hover {
    text-decoration: underline !important;
}

.top-author.bg-white .author-info h6 i::before,
.top-author.bg-white .author-info h6 {
    color: rgba(22, 22, 22, 0.3);
}

.top-author.style-2 {
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    position: relative;
}

.top-author.style-2 .author-avatar {
    width: 80px;
    margin-right: 20px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 0;
}

.top-author.style-2 .author-info {
    flex-grow: 1;
}

.top-author.style-2 .order {
    font-size: 32px;
    font-weight: 800;
    line-height: 44px;
    text-transform: capitalize;
    margin-left: 10px;
}

.seller-grid .col-md-4:last-child .top-author {
    border: none !important;
}

/* bg-white */
.top-author.style-2.bg-white {
    background-color: #fff;
    border-bottom: 1px solid rgba(22, 22, 22, 0.07);
}

.top-author.style-2.bg-white .author-avatar {
    border-radius: 20px;
}

.top-author.style-2.bg-white .author-avatar img {
    border-radius: 0;
}

.top-author.style-2.bg-white .order {
    color: rgba(22, 22, 22, 0.1);
    margin-left: 0;
    margin-right: 27px;
}

.background-white .top-author .author-info h5 a {
    color: #161616;
}

.background-white .top-author .author-info h5 a:hover {
    text-decoration: underline !important;
}

.background-white .top-author .price.gem i::before,
.background-white .top-author .price.gem {
    color: rgba(22, 22, 22, 0.3);
}

.background-white .top-author.style-2 {
    border-color: rgba(217, 217, 217, 1);
}

.background-white .top-author.style-2 .order {
    color: rgba(22, 22, 22, 0.1);
    margin-left: 0;
    width: 55px;
    margin-right: 16px;
}

.background-white .tf-card-box .wishlist-button,
.background-white .tf-card-box .featured-countdown {
    background-color: #fff;
}

.background-white .top-author.style-2 .author-avatar {
    border-radius: 20px;
}

.background-white .top-author.style-2 .author-avatar img {
    border-radius: 0;
}

.top-author.style-2.hv-border {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.top-author.style-2.hv-border:hover {
    box-shadow: 0px 30px 50px rgb(0 0 0 / 35%);
}

.background-white .top-author.style-2.hv-border:hover {
    box-shadow: 0px 25px 20px -10px rgb(0 0 2 / 5%);
}

@media screen and (max-width: 640px) {
    .top-author {
        .style-2 {
            &.author-avatar {
                width: 64px;
                margin-right: 20px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 0;
            }
        }

        .author-avatar {
            img {
                border-radius: 50%;
                aspect-ratio: 1;
                max-height: 64px;
                max-width: 64px;
            }
        }
    }
}
</style>
