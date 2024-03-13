<template>
    <div class="blob-container">
        <div class="shape-blob-s"></div>
        <div class="shape-blob-s one"></div>
        <div class="shape-blob-s two"></div>
    </div>
</template>

<style lang="scss">
.blob-container {
    @apply absolute top-0 min-h-[500px] h-full w-full overflow-hidden;
	filter: blur(40px);
}

.shape-blob-s {
    @apply absolute opacity-70 z-0 top-[10%];
    background: rgba(22, 218, 193, 0.9);
	height: 70px;
	width: 80px;
	border-radius: 50% 40% 30% 40%;
  	animation: transform 18s ease-in-out infinite both alternate, movementOne 12s ease-in-out infinite both;
	left: 25%;

    &.one {
        @apply -rotate-180;
        background: rgba(22, 218, 193, 0.9);
        width: 90px;
        height: 80px;
        left: 70%;
        top: 8vw;
        animation: transform 8s ease-in-out infinite both alternate, movementTwo 20s ease-in-out infinite both;
    }
    
    &.two {
        @apply -rotate-180;
        background: rgba(19, 201, 213, 0.9);
        width: 100px;
        height: 60px;
        left: 8%;
        top: 40%;
        animation: transform 10s ease-in-out infinite both alternate, movementTwo 10s ease-in-out infinite both;
    }
}

@keyframes transform
{
    0%,
  100% { border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%; } 
   20% { border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%; } 
   40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%; } 
   60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%; } 
   80% { border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%; } 
}


@keyframes movementOne
{
    0%,
  100% { transform: none; }
   50% { transform: translate(50%, 20%) rotateY(10deg) scale(1); }
}

@keyframes movementTwo
{
    0%,
  500% { transform: none; }
   50% { transform: translate(50%, 20%) rotate(-200deg) scale(1.3);}
}
</style>