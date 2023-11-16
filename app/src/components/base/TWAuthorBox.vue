<template>
  <div></div>
</template>

<style lang="scss">
.tf-author-box .author-avatar {
    margin-bottom: 14px;
    position: relative;
}

.tf-author-box .author-avatar .number {
    border-radius: 24px;
    background: #16DAC1;
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
    -moz-transition   : all 0.8s ease-in-out;
    -ms-transition    : all 0.8s ease-in-out;
    -o-transition     : all 0.8s ease-in-out;
    transition        : all 0.8s ease-in-out;
}

.tf-author-box:hover .author-avatar .number {
    transform: rotateY(360deg);
    background: #16DAC1;
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

.tf-author-box .author-infor .price.gem.style-1 i {
    font-size: 13px;
}

/* tf-author-box bg-white */
.tf-author-box.bg-white {
    background-color: #FFF;
}

.tf-author-box.bg-white .author-infor h5 a {
    color: #161616;
}

.tf-author-box.bg-white .author-infor h5 a:hover {
    color: #16DAC1;
}

.tf-author-box.bg-white .author-infor h6 i::before,
.tf-author-box.bg-white .author-infor h6 {
    color: rgba(22, 22, 22, 0.3);
}
</style>