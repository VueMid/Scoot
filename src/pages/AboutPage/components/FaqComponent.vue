<template>
    <div class="faq__main-message flex flex-col justify-center items-start gap-4 md:gap-6 xl:gap-4 target duration-500"
        v-motion-slide-visible-once-right>
        <article v-for="(item, index) in accordionArray" :key="item"
            class="faq__message dark:bg-tailwind-dark-second xl:dark:hover:bg-dark-navy bg-snow xl:hover:bg-light-yellow px-[32px] pt-[32px] pb-[6px] md:flex md:flex-col md:justify-center md:items-start w-[280px] sm:w-[311px] md:w-[689px] xl:w-[730px]">
            <div class="faq__header cursor-pointer w-full flex flex-row justify-between items-center pb-6"
                @click="myMethod(index)">
                <h6
                    class="faq__question dark:text-white text-dark-navy font-bold text-lg leading-6 tracking-tighter-[-0.804px] md:text-[24px] md:leading-7 md:tracking-tighter-[-1.071px] relative z-10">
                    {{ item.question }}
                </h6>
                <i class="cursor-pointer fa-solid fa-angle-up fa-xl"
                    :class="[item.isOpen === true ? 'rotate-0' : 'rotate-180']" style="color: #fcb72b;"></i>
            </div>
            <Transition name="fade" class="duration-[2000ms]">
                <div class="faq__body" v-if="item.isOpen">
                    <p
                        class="faq__answer text-dark-navy text-[15px] leading-[25px] mb-[32px] max-w-[251px] md:max-w-[617px] xl:w-[650px] dark:text-white/70">
                        {{ item.answer }}
                    </p>
                </div>
            </Transition>
        </article>
    </div>
</template>
<script>
export default {
    props: {
        accordionArray: {
            type: [Object, String]
        }
    },
    methods: {
        myMethod(index) {
            this.$emit('action', index)
        }
    }
}
</script>
<style>
.faq__answer {
    font-family: 'Lexend Deca';
}

.fade-enter-active,
.fade-leave-active {
    transition: 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    transition: 0.2s ease;
    opacity: 0;
}
</style>