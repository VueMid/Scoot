<template>
    <section class="list pb-[72px] md:pb-[120px]">
        <div
            class="container list__container mt-[72px] flex flex-col justify-center items-center gap-8 md:gap-10 xl:flex xl:flex-row xl:justify-between xl:items-center xl:gap-0">
            <h2 class="list__title max-w-[311px] text-center dark:text-white text-dark-navy text-[32px] font-bold leading-8 tracking-tighter-[-1.429px] md:max-w-[457px] md:text-5xl md:leading-[48px] md:tracking-tighter-[-2.143px] xl:max-w-[351px] xl:text-start xl:text-5xl xl:leading-[48px] xl:tracking-tighter-[-2.143px] target duration-[500ms]"
                v-motion-slide-visible-once-bottom>
                Your City Not Listed?
            </h2>
            <p class="list__text text-center max-w-[311px] text-[15px] leading-[25px] dark:text-white/70 text-dim-grey md:max-w-[573px] xl:text-start xl:max-w-[445px] target duration-[600ms]"
                v-motion-slide-visible-once-bottom>
                If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches
                based on demand. Feel free to message us by clicking the link or messaging us on social.
            </p>
            <a href="mailto:turabovumid587@gmail.com"
                class="bg-darker-yellow duration-200 text-center w-[180px] leading-[46px] h-[53px] border-[3px] border-darker-yellow text-white font-bold text-[15px] active:bg-inherit active:text-darker-yellow active:duration-200 target duration-[800ms]"
                v-motion-slide-visible-once-bottom>
                Message Us
            </a>
        </div>
    </section>
</template>
<style lang="scss">
.list {
    &__text {
        font-family: 'Lexend Deca';
    }
}
</style>