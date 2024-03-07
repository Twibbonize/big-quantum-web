<template>
    <div class="blob-container">
        <div class="shape-blob"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>
        <div class="shape-blob three"></div>
        <div class="shape-blob four"></div>
        <div class="shape-blob five"></div>
        <div class="shape-blob six"></div>
        <img
            class="shape-bg"
            src="/src/assets/img/patterns/background-banner-creators.png"
            alt=""
        />
    </div>
</template>

<style lang="scss">
.blob-container {
    @apply absolute top-0 min-h-[100vh] h-full w-full overflow-hidden;
    filter: blur(40px);
}

.shape-bg {
    position: absolute;
    width: 100vw;
    height: 140vw;
    top: 30%;
    left: 0%;
    z-index: -1;
    transform: rotate(13deg);
}

.shape-blob {
    @apply absolute opacity-70 z-0 top-[10%];
    background: rgba(22, 218, 193, 0.3);
    height: 15vw;
    width: 25vw;
    border-radius: 50% 40% 30% 40%;
    animation:
        transform 18s ease-in-out infinite both alternate,
        movementOne 12s ease-in-out infinite both;
    left: 25%;

    &.one {
        @apply -rotate-180;
        background: rgba(22, 218, 193, 0.3);
        width: 35vw;
        height: 27vw;
        left: 70%;
        top: 8vw;
        animation:
            transform 8s ease-in-out infinite both alternate,
            movementTwo 20s ease-in-out infinite both;
    }

    &.two {
        @apply -rotate-180;
        background: rgba(19, 201, 213, 0.3);
        width: 40vw;
        height: 23vw;
        left: 8%;
        top: 40%;
        animation:
            transform 10s ease-in-out infinite both alternate,
            movementTwo 10s ease-in-out infinite both;
    }

    &.three {
        @apply -rotate-180;
        background: rgba(19, 201, 213, 0.3);
        width: 504px;
        height: 449px;
        left: 80%;
        top: 24vw;
        animation:
            transform 7s ease-in-out infinite both alternate,
            movementTwo 23s ease-in-out infinite both;
    }

    &.four {
        @apply -rotate-180;
        background: rgba(19, 201, 213, 0.2);
        width: 26vw;
        height: 23vw;
        left: 18vw;
        top: 36vw;
        animation:
            transform 17s ease-in-out infinite both alternate,
            movementTwo 13s ease-in-out infinite both;
    }

    &.five {
        @apply -rotate-180;
        background: rgba(19, 201, 213, 0.16);
        width: 40vw;
        height: 23vw;
        left: 10%;
        top: 52vw;
        animation:
            transform 12s ease-in-out infinite both alternate,
            movementTwo 18s ease-in-out infinite both;
    }

    &.six {
        @apply -rotate-180;
        background: rgba(22, 218, 193, 0.2);
        width: 60vw;
        height: 56vw;
        left: -8vw;
        top: 62vw;
        animation:
            transform 5s ease-in-out infinite both alternate,
            movementTwo 5s ease-in-out infinite both;
    }
}

@keyframes transform {
    0%,
    100% {
        border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%;
    }
    20% {
        border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%;
    }
    40% {
        border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%;
    }
    60% {
        border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%;
    }
    80% {
        border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%;
    }
}

@keyframes movementOne {
    0%,
    100% {
        transform: none;
    }
    50% {
        transform: translate(50%, 20%) rotateY(10deg) scale(1);
    }
}

@keyframes movementTwo {
    0%,
    500% {
        transform: none;
    }
    50% {
        transform: translate(50%, 20%) rotate(-200deg) scale(1.3);
    }
}
</style>
