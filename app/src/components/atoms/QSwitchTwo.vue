<template>
    <div class="switch-toggle-two__container">
        <div class="switch-toggle-two switch-3 switch-candy">
            <input id="on" name="state-d" type="radio" checked />
            <label for="on" onclick=""><span>Monthly</span></label>
            <input id="off" name="state-d" type="radio" />
            <label for="off" onclick=""><span>Yearly</span></label>

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
        background: #dee8e8;
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

/* We can't test for a specific feature,
* so we only target browsers with support for media queries.
*/
@media only screen {
    /* Checkbox
*/
    .switch-light {
        position: relative;
        display: block;
        /* simulate default browser focus outlines on the switch,
 * when the inputs are focused.
 */
    }
    .switch-light::after {
        clear: both;
        content: '';
        display: table;
    }
    .switch-light *,
    .switch-light *:before,
    .switch-light *:after {
        box-sizing: border-box;
    }
    .switch-light a {
        display: block;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
    }
    .switch-light label,
    .switch-light > span {
        /* breathing room for bootstrap/foundation classes.
   */
        line-height: 2em;
        vertical-align: middle;
    }
    .switch-light input:focus ~ span a,
    .switch-light input:focus + label {
        outline-width: 2px;
        outline-style: solid;
        outline-color: Highlight;
        /* Chrome/Opera gets its native focus styles.
   */
    }
    @media (-webkit-min-device-pixel-ratio: 0) {
        .switch-light input:focus ~ span a,
        .switch-light input:focus + label {
            outline-color: -webkit-focus-ring-color;
            outline-style: auto;
        }
    }
    /* don't hide the input from screen-readers and keyboard access
*/
    .switch-light input {
        position: absolute;
        opacity: 0;
        z-index: 3;
    }
    .switch-light input:checked ~ span a {
        right: 0%;
    }
    /* inherit from label
*/
    .switch-light strong {
        font-weight: inherit;
    }
    .switch-light > span {
        position: relative;
        overflow: hidden;
        display: block;
        min-height: 2em;
        /* overwrite 3rd party classes padding
 * eg. bootstrap .well
 */
        padding: 0;
        text-align: left;
    }
    .switch-light span span {
        position: relative;
        z-index: 2;
        display: block;
        float: left;
        width: 50%;
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .switch-light a {
        position: absolute;
        right: 50%;
        top: 0;
        z-index: 1;
        display: block;
        width: 50%;
        height: 100%;
        padding: 0;
    }
    /* Radio Switch
*/
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
    .switch-toggle-two label:nth-child(2):nth-last-child(6),
    .switch-toggle-two label:nth-child(2):nth-last-child(6) ~ label,
    .switch-toggle-two label:nth-child(2):nth-last-child(6) ~ a {
        width: 33.33%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(6)
        ~ input:checked:nth-child(3)
        + label
        ~ a {
        left: 33.33%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(6)
        ~ input:checked:nth-child(5)
        + label
        ~ a {
        left: 66.66%;
    }
    .switch-toggle-two label:nth-child(2):nth-last-child(8),
    .switch-toggle-two label:nth-child(2):nth-last-child(8) ~ label,
    .switch-toggle-two label:nth-child(2):nth-last-child(8) ~ a {
        width: 25%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(8)
        ~ input:checked:nth-child(3)
        + label
        ~ a {
        left: 25%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(8)
        ~ input:checked:nth-child(5)
        + label
        ~ a {
        left: 50%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(8)
        ~ input:checked:nth-child(7)
        + label
        ~ a {
        left: 75%;
    }
    .switch-toggle-two label:nth-child(2):nth-last-child(10),
    .switch-toggle-two label:nth-child(2):nth-last-child(10) ~ label,
    .switch-toggle-two label:nth-child(2):nth-last-child(10) ~ a {
        width: 20%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(10)
        ~ input:checked:nth-child(3)
        + label
        ~ a {
        left: 20%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(10)
        ~ input:checked:nth-child(5)
        + label
        ~ a {
        left: 40%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(10)
        ~ input:checked:nth-child(7)
        + label
        ~ a {
        left: 60%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(10)
        ~ input:checked:nth-child(9)
        + label
        ~ a {
        left: 80%;
    }
    .switch-toggle-two label:nth-child(2):nth-last-child(12),
    .switch-toggle-two label:nth-child(2):nth-last-child(12) ~ label,
    .switch-toggle-two label:nth-child(2):nth-last-child(12) ~ a {
        width: 16.6%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(12)
        ~ input:checked:nth-child(3)
        + label
        ~ a {
        left: 16.6%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(12)
        ~ input:checked:nth-child(5)
        + label
        ~ a {
        left: 33.2%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(12)
        ~ input:checked:nth-child(7)
        + label
        ~ a {
        left: 49.8%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(12)
        ~ input:checked:nth-child(9)
        + label
        ~ a {
        left: 66.4%;
    }
    .switch-toggle-two
        label:nth-child(2):nth-last-child(12)
        ~ input:checked:nth-child(11)
        + label
        ~ a {
        left: 83%;
    }
    /* Candy Theme
* Based on the "Sort Switches / Toggles (PSD)" by Ormal Clarck
* http://www.premiumpixels.com/freebies/sort-switches-toggles-psd/
*/
    .switch-toggle-two.switch-candy,
    .switch-light.switch-candy > span {
        background-color: #dee8e8;
        border-radius: 30px;
    }
    .switch-light.switch-candy span span,
    .switch-light.switch-candy input:checked ~ span span:first-child,
    .switch-toggle-two.switch-candy label {
        color: #1b1b1b;
        font-weight: 500;
        text-align: center;
    }
    .switch-light.switch-candy input ~ span span:first-child,
    .switch-light.switch-candy input:checked ~ span span:nth-child(2),
    .switch-candy input:checked + label {
        color: #333;
    }
    .switch-candy a {
        border-radius: 20px;
        background-color: #ffffff;
        box-shadow: 0px 2.89091px 17.34549px 0px rgba(157, 170, 170, 0.12);
    }
    .switch-candy-blue a {
        background-color: #38a3d4;
    }
    .switch-candy-yellow a {
        background-color: #f5e560;
    }
    /* iOS Theme
*/
    .switch-ios.switch-light span span {
        color: #888b92;
    }
    .switch-ios.switch-light a {
        left: 0;
        top: 0;
        width: 2em;
        height: 2em;
        background-color: #fff;
        border-radius: 100%;
        border: 0.25em solid #d8d9db;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
    }
    .switch-ios.switch-light > span {
        display: block;
        width: 100%;
        height: 2em;
        background-color: #d8d9db;
        border-radius: 1.75em;
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out;
    }
    .switch-ios.switch-light > span span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        line-height: 1.875em;
        vertical-align: middle;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
    }
    .switch-ios.switch-light > span span:first-of-type {
        opacity: 1;
        padding-left: 1.875em;
    }
    .switch-ios.switch-light > span span:last-of-type {
        padding-right: 1.875em;
    }
    .switch-ios.switch-light input:checked ~ span a {
        left: 100%;
        border-color: #4bd865;
        margin-left: -2em;
    }
    .switch-ios.switch-light input:checked ~ span {
        border-color: #4bd865;
        box-shadow: inset 0 0 0 30px #4bd865;
    }
    .switch-ios.switch-light input:checked ~ span span:first-of-type {
        opacity: 0;
    }
    .switch-ios.switch-light input:checked ~ span span:last-of-type {
        opacity: 1;
        color: #fff;
    }
    .switch-ios.switch-toggle-two {
        background-color: #d8d9db;
        border-radius: 30px;
        box-shadow: inset rgba(0, 0, 0, 0.1) 0 1px 0;
    }
    .switch-ios.switch-toggle-two a {
        background-color: #4bd865;
        border: 0.125em solid #d8d9db;
        border-radius: 1.75em;
        -webkit-transition: all 0.12s ease-out;
        -moz-transition: all 0.12s ease-out;
        transition: all 0.12s ease-out;
    }
    .switch-ios.switch-toggle-two label {
        height: 2.4em;
        color: #888b92;
        line-height: 2.4em;
        vertical-align: middle;
    }
    .switch-ios input:checked + label {
        color: #3e4043;
    }
    /* Holo Theme
*/
    .switch-toggle-two.switch-holo,
    .switch-light.switch-holo > span {
        background-color: #464747;
        border-radius: 1px;
        box-shadow: inset rgba(0, 0, 0, 0.1) 0 1px 0;
        color: #fff;
        text-transform: uppercase;
    }
    .switch-holo label {
        color: #fff;
    }
    .switch-holo > span span {
        opacity: 0;
        -webkit-transition: all 0.1s;
        -moz-transition: all 0.1s;
        transition: all 0.1s;
    }
    .switch-holo > span span:first-of-type {
        opacity: 1;
    }
    .switch-holo > span span,
    .switch-holo label {
        font-size: 85%;
        line-height: 2.15625em;
    }
    .switch-holo a {
        background-color: #666;
        border-radius: 1px;
        box-shadow:
            inset rgba(255, 255, 255, 0.2) 0 1px 0,
            inset rgba(0, 0, 0, 0.3) 0 -1px 0;
    }
    /* Selected ON switch-light
*/
    .switch-holo.switch-light input:checked ~ span a {
        background-color: #0e88b1;
    }
    .switch-holo.switch-light input:checked ~ span span:first-of-type {
        opacity: 0;
    }
    .switch-holo.switch-light input:checked ~ span span:last-of-type {
        opacity: 1;
    }
    /* Material Theme
*/
    /* switch-light
*/
    .switch-light.switch-material a {
        top: -0.1875em;
        width: 1.75em;
        height: 1.75em;
        border-radius: 50%;
        background: #fafafa;
        box-shadow:
            0 0.125em 0.125em 0 rgba(0, 0, 0, 0.14),
            0 0.1875em 0.125em -0.125em rgba(0, 0, 0, 0.2),
            0 0.125em 0.25em 0 rgba(0, 0, 0, 0.12);
        -webkit-transition: right 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        -moz-transition: right 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        transition: right 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .switch-material.switch-light {
        overflow: visible;
    }
    .switch-material.switch-light::after {
        clear: both;
        content: '';
        display: table;
    }
    .switch-material.switch-light > span {
        overflow: visible;
        position: relative;
        top: 0.1875em;
        width: 3.25em;
        height: 1.5em;
        min-height: auto;
        border-radius: 1em;
        background: rgba(0, 0, 0, 0.26);
    }
    .switch-material.switch-light span span {
        position: absolute;
        clip: rect(0 0 0 0);
    }
    .switch-material.switch-light input:checked ~ span a {
        right: 0;
        background: #3f51b5;
        box-shadow:
            0 0.1875em 0.25em 0 rgba(0, 0, 0, 0.14),
            0 0.1875em 0.1875em -0.125em rgba(0, 0, 0, 0.2),
            0 0.0625em 0.375em 0 rgba(0, 0, 0, 0.12);
    }
    .switch-material.switch-light input:checked ~ span {
        background: rgba(63, 81, 181, 0.5);
    }
    /* switch-toggle-two
*/
    .switch-toggle-two.switch-material {
        overflow: visible;
    }
    .switch-toggle-two.switch-material::after {
        clear: both;
        content: '';
        display: table;
    }
    .switch-toggle-two.switch-material a {
        top: 48%;
        width: 0.375em !important;
        height: 0.375em;
        margin-left: 0.25em;
        background: #3f51b5;
        border-radius: 100%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        -webkit-transition: -webkit-transform 0.4s ease-in;
        -moz-transition: -moz-transform 0.4s ease-in;
        transition: transform 0.4s ease-in;
    }
    .switch-toggle-two.switch-material label {
        color: rgba(0, 0, 0, 0.54);
        font-size: 1em;
    }
    .switch-toggle-two.switch-material label:before {
        content: '';
        position: absolute;
        top: 48%;
        left: 0;
        display: block;
        width: 0.875em;
        height: 0.875em;
        border-radius: 100%;
        border: 0.125em solid rgba(0, 0, 0, 0.54);
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .switch-toggle-two.switch-material input:checked + label:before {
        border-color: #3f51b5;
    }
    /* ripple
*/
    .switch-light.switch-material > span:before,
    .switch-light.switch-material > span:after,
    .switch-toggle-two.switch-material label:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        display: block;
        width: 4em;
        height: 4em;
        border-radius: 100%;
        background: #3f51b5;
        opacity: 0.4;
        margin-left: -1.25em;
        margin-top: -1.25em;
        -webkit-transform: scale(0);
        -moz-transform: scale(0);
        -ms-transform: scale(0);
        -o-transform: scale(0);
        transform: scale(0);
        -webkit-transition: opacity 0.4s ease-in;
        -moz-transition: opacity 0.4s ease-in;
        transition: opacity 0.4s ease-in;
    }
    .switch-light.switch-material > span:after {
        left: auto;
        right: 0;
        margin-left: 0;
        margin-right: -1.25em;
    }
    .switch-toggle-two.switch-material label:after {
        width: 3.25em;
        height: 3.25em;
        margin-top: -0.75em;
    }
    @-webkit-keyframes materialRipple {
        0% {
            -webkit-transform: scale(0);
        }

        20% {
            -webkit-transform: scale(1);
        }

        100% {
            opacity: 0;
            -webkit-transform: scale(1);
        }
    }

    @-moz-keyframes materialRipple {
        0% {
            -moz-transform: scale(0);
        }

        20% {
            -moz-transform: scale(1);
        }

        100% {
            opacity: 0;
            -moz-transform: scale(1);
        }
    }

    @keyframes materialRipple {
        0% {
            -webkit-transform: scale(0);
            -moz-transform: scale(0);
            -ms-transform: scale(0);
            -o-transform: scale(0);
            transform: scale(0);
        }

        20% {
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
        }

        100% {
            opacity: 0;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
        }
    }

    .switch-material.switch-light input:not(:checked) ~ span:after,
    .switch-material.switch-light input:checked ~ span:before,
    .switch-toggle-two.switch-material input:checked + label:after {
        -webkit-animation: materialRipple 0.4s ease-in;
        -moz-animation: materialRipple 0.4s ease-in;
        animation: materialRipple 0.4s ease-in;
    }
    /* trick to prevent the default checked ripple animation from showing
* when the page loads.
* the ripples are hidden by default, and shown only when the input is focused.
*/
    .switch-light.switch-material.switch-light input ~ span:before,
    .switch-light.switch-material.switch-light input ~ span:after,
    .switch-material.switch-toggle-two input + label:after {
        visibility: hidden;
    }
    .switch-light.switch-material.switch-light input:focus:checked ~ span:before,
    .switch-light.switch-material.switch-light input:focus:not(:checked) ~ span:after,
    .switch-material.switch-toggle-two input:focus:checked + label:after {
        visibility: visible;
    }
}

/* Bugfix for older Webkit, including mobile Webkit. Adapted from
* http://css-tricks.com/webkit-sibling-bug/
*/
@media only screen and (-webkit-max-device-pixel-ratio: 2) and (max-device-width: 80em) {
    .switch-light,
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

/*# sourceMappingURL=toggle-switch.css.map */
</style>
