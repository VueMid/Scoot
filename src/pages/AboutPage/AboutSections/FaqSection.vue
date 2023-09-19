<template>
    <section class="faq mt-[145px] md:mt-[120px] xl:mt-[120px]">
        <div class="container faq__container flex flex-col justify-center items-center gap-12 md:gap-16">
            <h2
                class="faq__title text-center dark:text-white text-dark-navy text-[32px] font-bold leading-8 tracking-tighter-[-1.429px] md:text-[48px] md:leading-[48px] md:tracking-tighter-[-2.143px]">
                FAQs</h2>
            <!-- Bottom boxes -->
            <div
                class="faq__bottom-box flex flex-col justify-center items-center gap-8 xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-0">
                <h5
                    class="faq__mini-title dark:text-white text-dark-navy text-2xl font-bold leading-7 tracking-tighter-[-1.071px] md:text-[40px] md:leading-[48px] md:tracking-tighter-[-1.786px]">
                    How it works
                </h5>
                <div class="faq__main-message flex flex-col justify-center items-start gap-4 md:gap-6 xl:gap-4">
                    <article v-for="(item, index) in accordionArray" :key="item"
                        class="faq__message dark:bg-tailwind-dark-second xl:dark:hover:bg-dark-navy bg-snow xl:hover:bg-light-yellow px-[32px] pt-[32px] pb-[6px] md:flex md:flex-col md:justify-center md:items-start w-[280px] sm:w-[311px] md:w-[689px] xl:w-[730px]">
                        <div class="faq__header cursor-pointer w-full flex flex-row justify-between items-center pb-6"
                            @click="toggleAccordion(index)">
                            <h6
                                class="faq__message-title dark:text-white text-dark-navy font-bold text-lg leading-6 tracking-tighter-[-0.804px] md:text-[24px] md:leading-7 md:tracking-tighter-[-1.071px] relative z-10">
                                {{ item.title }}
                            </h6>
                            <i class="cursor-pointer fa-solid fa-angle-up fa-xl"
                                :class="[item.isOpen === true ? 'rotate-0' : 'rotate-180']" style="color: #fcb72b;"></i>
                        </div>
                        <div class="faq__body" v-if="item.isOpen">
                            <p
                                class="faq__text text-dark-navy text-[15px] leading-[25px] mb-[32px] max-w-[251px] md:max-w-[617px] xl:w-[650px] dark:text-white/70">
                                {{ item.text }}
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            isOpen: true,
            accordionArray: [
                {
                    title: 'How do I download the app?',
                    text: `To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.`,
                    isOpen: false,
                },
                {
                    title: 'Can I find a nearby Scoots?',
                    text: `Scoot web page scoot map makes it easy for users to find and use nearby scooters. Scoot does not matter where you are, it works everywhere you use this web site`,
                    isOpen: false,
                },
                {
                    title: 'Do I need a license to ride?',
                    text: `Short answer is yes. A local or foreign motorcycle license will work fine. In Cape Town (where I live) they frequently have periods where they pull over all the motorbikes in town to do checks. So you can get away without a license, just not indefinitely.`,
                    isOpen: false,
                },
            ]
        }

    },
    methods: {
        toggleAccordion(index) {
            this.accordionArray.forEach((item, idx) => {
                if (idx === index) {
                    item.isOpen = !item.isOpen;
                } else {
                    item.isOpen = false;
                }
            });
        }
    },
}
</script>
<style lang="scss">
.faq {
    &__text {
        font-family: 'Lexend Deca';
    }
}
</style>