<template>
    <div class="switch-toggle__container">
        <div class="switch-toggle switch-3 switch-candy">
            <input id="on" name="state-d" type="radio" checked />
            <label for="on" onclick=""><span>7 days</span></label>

            <input id="na" name="state-d" type="radio" />
            <label for="na" onclick=""><span>30 days</span></label>

            <input id="off" name="state-d" type="radio" />
            <label for="off" onclick=""><span>All</span></label>

            <a></a>
        </div>
    </div>
</template>

<style lang="scss">
.switch-toggle {
    width: 100%;
    height: 40px;
    border-radius: 20px;

    &__container {
        width: 100%;
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

.switch-toggle label:not(.disabled) {
    cursor: pointer;
}

.switch-toggle a,
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
    .switch-toggle {
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
    .switch-toggle::after {
        clear: both;
        content: '';
        display: table;
    }
    .switch-toggle *,
    .switch-toggle *:before,
    .switch-toggle *:after {
        box-sizing: border-box;
    }
    .switch-toggle a {
        display: block;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;

        &::after {
            display: none !important;
        }
    }
    .switch-toggle label,
    .switch-toggle > span {
        /* breathing room for bootstrap/foundation classes.
   */
        line-height: 2em;
        vertical-align: middle;
    }
    .switch-toggle input:focus ~ span a,
    .switch-toggle input:focus + label {
        outline-width: 2px;
        outline-style: solid;
        outline-color: Highlight;
        /* Chrome/Opera gets its native focus styles.
   */
    }
    @media (-webkit-min-device-pixel-ratio: 0) {
        .switch-toggle input:focus ~ span a,
        .switch-toggle input:focus + label {
            outline-color: -webkit-focus-ring-color;
            outline-style: auto;
        }
    }
    .switch-toggle input {
        position: absolute;
        left: 0;
        opacity: 0;
    }
    .switch-toggle input + label {
        position: relative;
        z-index: 2;
        display: block;
        float: left;
        padding: 0 0.5em;
        margin: 0;
        text-align: center;
    }
    .switch-toggle a {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0;
        z-index: 1;
        width: 10px;
        height: 100%;
    }
    .switch-toggle label:nth-child(2):nth-last-child(4),
    .switch-toggle label:nth-child(2):nth-last-child(4) ~ label,
    .switch-toggle label:nth-child(2):nth-last-child(4) ~ a {
        width: 50%;
    }
    .switch-toggle label:nth-child(2):nth-last-child(4) ~ input:checked:nth-child(3) + label ~ a {
        left: 50%;
    }
    .switch-toggle label:nth-child(2):nth-last-child(6),
    .switch-toggle label:nth-child(2):nth-last-child(6) ~ label,
    .switch-toggle label:nth-child(2):nth-last-child(6) ~ a {
        width: 33.33%;
    }
    .switch-toggle label:nth-child(2):nth-last-child(6) ~ input:checked:nth-child(3) + label ~ a {
        left: 33.33%;
    }
    .switch-toggle label:nth-child(2):nth-last-child(6) ~ input:checked:nth-child(5) + label ~ a {
        left: 66.66%;
    }
    .switch-candy a {
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 2.89091px 17.34549px 0px rgba(157, 170, 170, 0.12);
    }
}

@media only screen and (-webkit-max-device-pixel-ratio: 2) and (max-device-width: 80em) {
    .switch-light,
    .switch-toggle {
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
