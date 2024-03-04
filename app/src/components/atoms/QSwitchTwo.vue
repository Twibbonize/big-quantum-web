<script setup>
defineProps({
    name: {
        type: String,
        default: 'q-switch-2'
    },
    options: {
        type: Array,
        default: () => [
            {
                text: 'Monthly',
                key: 'monthly'
            },
            {
                text: 'Yearly',
                key: 'yearly'
            },
        ],
    },
});
</script>

<template>
    <div class="switch-toggle-two__container">
        <div class="switch-toggle-two switch-3 switch-candy">
            <input :id="options[0].key" :name="name" type="radio" checked />
            <label :for="options[0].key" onclick=""><span>{{ options[0].text  }}</span></label>
            <input :id="options[1].key" :name="name" type="radio" />
            <label :for="options[1].key" onclick=""><span>{{ options[1].text }}</span></label>
            <a></a>
        </div>
    </div>
</template>

<style lang="scss">
.switch-toggle-two {
    width: 225px;
    height: 40px;
    border-radius: 20px;

    &__container {
        width: 237px;
        height: 52px;
        border-radius: 26px;
        box-sizing: border-box;
        padding: 6px;
        background-color: rgba(255, 255, 255, .4);
    }

    label {
        text-indent: 0;
        font-size: 14px;
        border-radius: 20px;
        background: transparent;
        height: 40px !important;
        display: flex !important;
        justify-content: center;
        align-items: center;
        outline: none !important;
        border: none !important;
        user-select: none;
        border-radius: 20px;

        &::after {
            display: none;
        }
    }

    input:checked + label {
        background: transparent !important;
        font-weight: 800 !important;
    }
}

.switch-toggle-two label:not(.disabled) {
    cursor: pointer;
}

.switch-toggle-two a,
.switch-light span span {
    display: none;
}
.switch-toggle-two {
    position: relative;
    display: block;
    /* simulate default browser focus outlines on the switch,
* when the inputs are focused.
*/
    /* For callout panels in foundation
*/
    padding: 0 !important;
    /* 2 items
*/
    /* 3 items
*/
    /* 4 items
*/
    /* 5 items
*/
    /* 6 items
*/
}
.switch-toggle-two::after {
    clear: both;
    content: '';
    display: table;
}
.switch-toggle-two *,
.switch-toggle-two *:before,
.switch-toggle-two *:after {
    box-sizing: border-box;
}
.switch-toggle-two a {
    display: block;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;

    &::after {
        display: none !important;
    }
}
.switch-toggle-two label,
.switch-toggle-two > span {
    /* breathing room for bootstrap/foundation classes.
*/
    line-height: 2em;
    vertical-align: middle;
}
.switch-toggle-two input:focus ~ span a,
.switch-toggle-two input:focus + label {
    outline-width: 2px;
    outline-style: solid;
    outline-color: Highlight;
    /* Chrome/Opera gets its native focus styles.
*/
}
@media (-webkit-min-device-pixel-ratio: 0) {
    .switch-toggle-two input:focus ~ span a,
    .switch-toggle-two input:focus + label {
        outline-color: -webkit-focus-ring-color;
        outline-style: auto;
    }
}
.switch-toggle-two input {
    position: absolute;
    left: 0;
    opacity: 0;
}
.switch-toggle-two input + label {
    position: relative;
    z-index: 2;
    display: block;
    float: left;
    padding: 0 0.5em;
    margin: 0;
    text-align: center;
}
.switch-toggle-two a {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    z-index: 1;
    width: 10px;
    height: 100%;
}
.switch-toggle-two label:nth-child(2):nth-last-child(4),
.switch-toggle-two label:nth-child(2):nth-last-child(4) ~ label,
.switch-toggle-two label:nth-child(2):nth-last-child(4) ~ a {
    width: 50%;
}
.switch-toggle-two
    label:nth-child(2):nth-last-child(4)
    ~ input:checked:nth-child(3)
    + label
    ~ a {
    left: 50%;
}

/* Bugfix for older Webkit, including mobile Webkit. Adapted from
* http://css-tricks.com/webkit-sibling-bug/
*/
@media only screen and (-webkit-max-device-pixel-ratio: 2) and (max-device-width: 80em) {
    .switch-toggle-two {
        -webkit-animation: webkitSiblingBugfix infinite 1s;
    }
}

@-webkit-keyframes webkitSiblingBugfix {
    from {
        -webkit-transform: translate3d(0, 0, 0);
    }

    to {
        -webkit-transform: translate3d(0, 0, 0);
    }
}
</style>
