<script setup>
import numeral from 'numeral';

const props = defineProps({
    number: Number,
    name: String,
    avatar: String,
    supports: Number
});
</script>

<template>
    <div class="tf-author-box style-2 hv-border mb-6 w-full">
        <div class="order">{{ `#${props.number}` }}</div>
        <div class="author-avatar rounded-full">
            <img :src="avatar" alt="" class="avatar rounded-full" />
        </div>
        <div class="author-infor">
            <h5>
                <a href="author-2.html">{{ name }}</a>
            </h5>
            <h6 class="price gem style-1">
                <i class="ri-group-line"></i>{{ numeral(props.supports).format('0.0a') }}
            </h6>
        </div>
    </div>
</template>

<style lang="scss">
.tf-author-box {
    &:hover {
        cursor: pointer;
    }
}

.tf-author-box .author-avatar {
    margin-bottom: 14px;
    position: relative;
}

.tf-author-box .author-avatar .number {
    border-radius: 24px;
    background: #16dac1;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #161616;
    font-size: 13px;
    font-weight: 800;
    line-height: 18px;
    position: absolute;
    top: 0;
    right: 33px;
    -webkit-transition: all 0.8s ease-in-out;
    -moz-transition: all 0.8s ease-in-out;
    -ms-transition: all 0.8s ease-in-out;
    -o-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
}

.tf-author-box:hover .author-avatar .number {
    transform: rotateY(360deg);
    background: #16dac1;
}

.tf-author-box .author-infor h5 {
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

/* tf-author-box style-1 */
.tf-author-box.style-1 {
    align-items: center;
    padding: 10px;
    border-radius: 10000px;
    background: rgba(255, 255, 255, 0.1);
    width: fit-content;
}

.tf-author-box.style-1 .author-avatar {
    margin-right: 16px;
    margin-bottom: 0;
}

.tf-author-box .author-avatar img {
    border-radius: 50%;
    height: 80px;
    width: 80px;
}

.tf-author-box.style-2.type-1 {
    padding: 24px;
    border-radius: 20px;
    background: #232323;
    margin-bottom: 0;
    border: none;
}

.tf-author-box.style-2.type-1 .author-avatar {
    width: 70px;
    height: 70px;
    margin-right: 16px;
}

.tf-author-box.style-2.type-1 .price.gem {
    font-weight: 400;
    font-size: 14px;
}

.tf-author-box .author-infor .price.gem.style-1 i {
    font-size: 13px;
}

/* tf-author-box bg-white */
.tf-author-box.bg-white {
    background-color: #fff;
}

.tf-author-box.bg-white .author-infor h5 a {
    color: #161616;
}

.tf-author-box.bg-white .author-infor h5 a:hover {
    text-decoration: underline !important;
}

.tf-author-box.bg-white .author-infor h6 i::before,
.tf-author-box.bg-white .author-infor h6 {
    color: rgba(22, 22, 22, 0.3);
}

/* style-3 */
.tf-author-box.style-3 .author-avatar img {
    border-radius: 20px;
}

.tf-author-box .author-avatar .number {
    background-color: #dee8e8;
    left: 50%;
    margin-left: 23px;
}

.tf-author-box.style-3 .author-avatar .number {
    margin-left: 41px;
}

.tf-author-box.style-2 {
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    position: relative;
}

.tf-author-box.style-2.no-border-b {
    border: none;
}

.tf-author-box.style-2 .author-avatar {
    width: 80px;
    margin-right: 20px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 0;
}

.tf-author-box.style-2 .author-infor {
    flex-grow: 1;
}

.tf-author-box.style-2 .order {
    font-size: 32px;
    font-weight: 800;
    line-height: 44px;
    text-transform: capitalize;
    margin-left: 10px;
}

.seller-grid .col-md-4:last-child .tf-author-box {
    border: none !important;
}

/* bg-white */
.tf-author-box.style-2.bg-white {
    background-color: #fff;
    border-bottom: 1px solid rgba(22, 22, 22, 0.07);
}

.tf-author-box.style-2.bg-white .author-avatar {
    border-radius: 20px;
}

.tf-author-box.style-2.bg-white .author-avatar img {
    border-radius: 0;
}

.tf-author-box.style-2.bg-white .order {
    color: rgba(22, 22, 22, 0.1);
    margin-left: 0;
    margin-right: 27px;
}

.background-white .tf-author-box .author-infor h5 a {
    color: #161616;
}

.background-white .tf-author-box .author-infor h5 a:hover {
    text-decoration: underline !important;
}

.background-white .tf-author-box .price.gem i::before,
.background-white .tf-author-box .price.gem {
    color: rgba(22, 22, 22, 0.3);
}

.background-white .tf-author-box.style-2 {
    border-color: rgba(217, 217, 217, 1);
}

.background-white .tf-author-box.style-2 .order {
    color: rgba(22, 22, 22, 0.1);
    margin-left: 0;
    width: 55px;
    margin-right: 16px;
}

.background-white .tf-card-box .wishlist-button,
.background-white .tf-card-box .featured-countdown {
    background-color: #fff;
}

.background-white .tf-author-box.style-2 .author-avatar {
    border-radius: 20px;
}

.background-white .tf-author-box.style-2 .author-avatar img {
    border-radius: 0;
}

.tf-author-box.style-2.hv-border {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.tf-author-box.style-2.hv-border:hover {
    box-shadow: 0px 30px 50px rgb(0 0 0 / 35%);
}

.background-white .tf-author-box.style-2.hv-border:hover {
    box-shadow: 0px 25px 20px -10px rgb(0 0 2 / 5%);
}
</style>
